import React from 'react';

import Controlbutton from '../control-button/control-button.component';

import { Logo, Bar } from './app-bar.styles';

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <Controlbutton active name={'dashboard'} />
      <Controlbutton name={'settings'} />
    </Bar>
  );
};

export default AppBar;
