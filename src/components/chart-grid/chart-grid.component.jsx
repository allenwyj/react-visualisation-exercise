import React from 'react';

import ChartHeader from '../chart-header/chart-header.component';
import PriceChart from '../price-chart/price-chart.component';

import { ChartGridContainer } from './chart-grid.styles';

const ChartGrid = () => (
  <ChartGridContainer>
    <ChartHeader />
    <PriceChart />
  </ChartGridContainer>
);

export default ChartGrid;
