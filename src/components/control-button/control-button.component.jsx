import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

import { ControlbuttonElem } from './control-button.styles';

const toProperCase = aString => {
  return aString.charAt(0).toUpperCase() + aString.substr(1);
};

const ControlButton = ({ name }) => {
  const { page, setCurrentPage } = useContext(AppContext);
  
  return (
    <ControlbuttonElem
      active={page === name}
      onClick={() => setCurrentPage(name)}
    >
      {toProperCase(name)}
    </ControlbuttonElem>
  );
};

export default ControlButton;
