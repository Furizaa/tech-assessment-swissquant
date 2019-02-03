import { useState, useEffect } from 'react';

// @ts-ignore Unable to get typings right here with next/weorkers/webpack
import WebpackWorker from './marketDataProvider.worker';

import { NormalizedMarketData } from './types';

type MarketDataHook = [NormalizedMarketData | null];

export const useMarketData = (): MarketDataHook => {
  const [marketData, setMarketData] = useState<NormalizedMarketData | null>(
    null
  );

  const onDone = (event: MessageEvent) => setMarketData(event.data);

  useEffect(() => {
    const worker = new WebpackWorker();

    worker.addEventListener('message', onDone);
    worker.postMessage({});
    return () => {
      worker.removeEventListener('message', onDone);
      worker.terminate();
    };
  }, []);

  return [marketData];
};
