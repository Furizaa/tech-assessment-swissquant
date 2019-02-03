import * as React from 'react';
import styled from 'styled-components';
import { NormalizedMarketData } from '../modules/MarketData/types';
import { AutoSizer, Table, Column } from 'react-virtualized';

interface Props {
  marketData: NormalizedMarketData;
}

const STable = styled(Table)`
  margin-top: 20px;
  font-family: 'proxima nova';
`;

export default ({ marketData }: Props) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <STable
          headerHeight={30}
          height={height}
          rowCount={marketData.flattenedSeries.length}
          rowGetter={({ index }: { index: number }) =>
            marketData.flattenedSeries[index]
          }
          rowHeight={50}
          width={width}
        >
          <Column key="date" width={160} dataKey="date" label="Date" />
          {marketData.instrumentList.map(instrumentId => (
            <Column
              width={width / marketData.instrumentList.length}
              dataKey={`${instrumentId}`}
              label={instrumentId}
              key={instrumentId}
              cellRenderer={({ cellData }) => Math.ceil(cellData)}
            />
          ))}
        </STable>
      )}
    </AutoSizer>
  );
};
