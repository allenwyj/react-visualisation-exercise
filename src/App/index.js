import React from 'react';
import './App.css';

import WelcomeMessage from '../components/welcome-message/welcome-message.component';
import AppBar from '../components/app-bar/app-bar.component';

import { AppProvider } from '../providers/app/app.provider';

import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
