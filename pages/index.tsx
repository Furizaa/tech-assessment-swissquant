import * as React from 'react';

import '../assets/virtualized.css';

import { theme } from '../components/theme';
import { Normalize } from 'styled-normalize';

import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import MarketDataProvider from '../modules/MarketData/MarketDataProvider';
import MarketDataChart from '../components/MarketDataChart';
import MarketDataLegend from '../components/MarketDataLegend';
import MarketDataTable from '../components/MarketDataTable';
import LoadingSpinner from '../components/LoadingSpinner';

export default () => {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <MarketDataProvider>
          {({
            marketData,
            toggleActiveInstrument,
            activeInstrumentList,
            setDateFilterFrom,
            setDateFilterTo,
          }) => (
            <Layout
              headerComponent={
                !!marketData ? (
                  <MarketDataLegend
                    instrumentList={marketData.instrumentList}
                    activeInstrumentList={activeInstrumentList}
                    onToggle={toggleActiveInstrument}
                    onChangeFrom={setDateFilterFrom}
                    onChangeTo={setDateFilterTo}
                  />
                ) : (
                  <div />
                )
              }
              chartComponent={
                !!marketData ? (
                  <MarketDataChart
                    marketData={marketData}
                    activeInstrumentList={activeInstrumentList}
                  />
                ) : (
                  <LoadingSpinner />
                )
              }
              tableComponent={
                !!marketData ? (
                  <MarketDataTable marketData={marketData} />
                ) : (
                  <div />
                )
              }
            />
          )}
        </MarketDataProvider>
      </ThemeProvider>
    </>
  );
};
