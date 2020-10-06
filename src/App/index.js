import React from 'react';
import './App.css';

import WelcomeMessage from '../components/welcome-message.components/WelcomeMessage';
import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
