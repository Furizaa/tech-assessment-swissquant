import * as React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { NormalizedMarketData } from '../modules/MarketData/types';

interface Props {
  marketData: NormalizedMarketData;
  activeInstrumentList: Array<number>;
}

const yAxisFormatter = (value: any) => `${Math.ceil(value)}%`;

export default ({ marketData, activeInstrumentList }: Props) => {
  const filteredInstrumentList = activeInstrumentList.length
    ? activeInstrumentList
    : marketData.instrumentList;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={marketData.flattenedSeries}>
        <XAxis dataKey="date" />
        <YAxis
          type="number"
          tickFormatter={yAxisFormatter}
          domain={[0, 100]}
          ticks={[0, 50, 100, 200]}
        />
        <Tooltip formatter={yAxisFormatter} />
        <ReferenceLine y={100} stroke="red" />
        {filteredInstrumentList.map(instrumentId => (
          <Line
            key={instrumentId}
            type="basis"
            dataKey={instrumentId}
            stroke="#8884d8"
            dot={false}
            name={`${instrumentId}`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
