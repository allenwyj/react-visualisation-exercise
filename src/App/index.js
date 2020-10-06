import React from 'react';
import './App.css';

import AppBar from '../components/app-bar/app-bar.component';
import SettingPage from '../pages/setting.page';

import { AppProvider } from '../providers/app/app.provider';

import AppLayout from './AppLayout';

const App = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <SettingPage />
      </AppProvider>
    </AppLayout>
  );
};

export default App;
