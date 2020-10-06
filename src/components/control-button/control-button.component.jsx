import React from 'react';

import { ControlbuttonElem } from './control-button.styles';

const toProperCase = aString => {
  return aString.charAt(0).toUpperCase() + aString.substr(1);
};

const ControlButton = ({ name, active }) => (
  <ControlbuttonElem active={active}>{toProperCase(name)}</ControlbuttonElem>
);

export default ControlButton;
