import React from 'react';

import { Logo, Bar } from './app-bar.styles';

import Controlbutton from '../control-button/control-button.component';

const AppBar = () => (
  <Bar>
    <Logo>CryptoDash</Logo>
    <div />
    <Controlbutton active name={'dashBoard'} />
    <Controlbutton name={'setting'} />
  </Bar>
);

export default AppBar;
