import React from 'react';

import WelcomeMessage from '../components/welcome-message/welcome-message.component';
import ConfirmButton from '../components/confirm-button/confirm-button.component';
import PageContainer from '../components/page-container/page-container.component';

const SettingPage = () => {
  return (
    <PageContainer name={'settings'}>
      <WelcomeMessage />
      <ConfirmButton />
    </PageContainer>
  );
};

export default SettingPage;
