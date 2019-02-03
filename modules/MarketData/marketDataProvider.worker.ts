import memoize from 'memoize-one';
import rawMarketData from './mktdata.json';

import { FlatMarketData, NormalizedMarketData } from './types';

const ctx: Worker = self as any;

const flattenMarketData = (): NormalizedMarketData => {
  const instrumentList = new Set<number>();
  let normalizationBase: number = 100;

  const indexedByDate = rawMarketData.mktData.reduce<{
    [date: string]: object;
  }>((curr, instrument) => {
    instrumentList.add(instrument.instrumentId);

    normalizationBase = instrument.timeSeries.entries[0]
      ? instrument.timeSeries.entries[0].v
      : 100;

    return instrument.timeSeries.entries.reduce<{ [date: string]: object }>(
      (entryCurry, entry) => ({
        ...entryCurry,
        [entry.d]: {
          [`${instrument.instrumentId}`]: (100 / normalizationBase) * entry.v,
          ...(curr[entry.d] || {}),
        },
      }),
      {}
    );
  }, {});

  const flattenedSeries = Object.keys(indexedByDate).map(date => ({
    date,
    ...indexedByDate[date],
  }));

  return { flattenedSeries, instrumentList: Array.from(instrumentList) };
};

const memoizedFlattenMarketData = memoize(flattenMarketData);

ctx.addEventListener('message', () =>
  ctx.postMessage(memoizedFlattenMarketData())
);
