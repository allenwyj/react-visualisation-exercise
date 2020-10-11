import React from 'react';

import ChartHeader from '../chart-header/chart-header.component';

import { ChartGridContainer } from './chart-grid.styles';

const ChartGrid = () => (
  <ChartGridContainer>
    <ChartHeader />
    <div> Chart goes here </div>
  </ChartGridContainer>
);

export default ChartGrid;
