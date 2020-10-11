import React from 'react';
import './App.css';

import AppBar from '../components/app-bar/app-bar.component';
import SettingPage from '../pages/setting.page';
import DashboardPage from '../pages/dashboard.page';
import LoadingContent from '../components/loading-content/loading-content.component';

import { AppProvider } from '../providers/app/app.provider';

import AppLayout from './AppLayout';

const App = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <LoadingContent>
          <SettingPage />
          <DashboardPage />
        </LoadingContent>
      </AppProvider>
    </AppLayout>
  );
};

export default App;
