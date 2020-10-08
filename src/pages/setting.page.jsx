import React from 'react';

import WelcomeMessage from '../components/welcome-message/welcome-message.component';
import ConfirmButton from '../components/confirm-button/confirm-button.component';
import PageContainer from '../components/page-container/page-container.component';
import CoinGrid from '../components/coin-grid/coin-grid.component';
import Search from '../components/search/search.component';

const SettingPage = () => {
  return (
    <PageContainer name={'settings'}>
      <WelcomeMessage />
      {
        // Defining the topSection CoinGrid, it will pass true value as the props
      }
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </PageContainer>
  );
};

export default SettingPage;
