import * as React from 'react';
import without from 'lodash/without';

import { parse, isAfter, isBefore, isValid } from 'date-fns';

import { useMarketData } from './useMarketData';
import { NormalizedMarketData, FlatMarketData } from './types';

interface Provided {
  marketData: NormalizedMarketData | null;
  activeInstrumentList: Array<number>;
  toggleActiveInstrument: (instrumentId: number) => void;
  setDateFilterFrom: (date: string) => void;
  setDateFilterTo: (date: string) => void;
  isLoading: boolean;
}

interface Props {
  children: (provided: Provided) => React.ReactElement<any>;
}

const filterByDate = (
  data: Array<FlatMarketData>,
  dateFrom: string,
  dateTo: string
): Array<FlatMarketData> => {
  const from = parse(dateFrom);
  const to = parse(dateTo);
  if (!isValid(from) && !isValid(to)) {
    return data;
  }
  return data.filter(entry => {
    const compare = parse(entry.date);
    if (isValid(from) && isValid(to)) {
      return isAfter(compare, from) && isBefore(compare, to);
    }
    if (isValid(from) && !isValid(to)) {
      return isAfter(compare, from);
    }
    if (!isValid(from) && isValid(to)) {
      return isBefore(compare, to);
    }
    return true;
  });
};

export default ({ children }: Props) => {
  const [marketData] = useMarketData();
  const [activeInstrumentList, setActiveInstrumentList] = React.useState<
    Array<number>
  >(!!marketData ? marketData.instrumentList : []);
  const [dateFilterFrom, setDateFilterFrom] = React.useState<string>('');
  const [dateFilterTo, setDateFilterTo] = React.useState<string>('');

  const toggleActiveInstrument = (instrumentId: number) => {
    activeInstrumentList.includes(instrumentId)
      ? setActiveInstrumentList(without(activeInstrumentList, instrumentId))
      : setActiveInstrumentList([...activeInstrumentList, instrumentId]);
  };

  const filteredMarketData = !!marketData
    ? {
        ...marketData,
        flattenedSeries: filterByDate(
          marketData.flattenedSeries,
          dateFilterFrom,
          dateFilterTo
        ),
      }
    : null;

  return children({
    marketData: filteredMarketData,
    isLoading: marketData === null,
    toggleActiveInstrument,
    activeInstrumentList,
    setDateFilterFrom,
    setDateFilterTo,
  });
};
