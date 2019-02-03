export interface FlatMarketData {
  date: string;
  [instrumentId: string]: any;
}

export interface NormalizedMarketData {
  flattenedSeries: Array<FlatMarketData>;
  instrumentList: Array<number>;
}
