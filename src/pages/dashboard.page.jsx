import React from 'react';

import PriceGrid from '../components/price-grid/price-grid.component';
import ChartGrid from '../components/chart-grid/chart-grid.component';

import PageContainer from '../components/page-container/page-container.component';

const DashboardPage = () => {
  return (
    <PageContainer name="dashboard">
      <PriceGrid />
      <ChartGrid />
    </PageContainer>
  );
};
export default DashboardPage;
