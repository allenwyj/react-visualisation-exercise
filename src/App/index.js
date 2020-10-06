import React from 'react';
import './App.css';

import WelcomeMessage from '../components/welcome-message/welcome-message.component';
import AppBar from '../components/app-bar/app-bar.component';

import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
