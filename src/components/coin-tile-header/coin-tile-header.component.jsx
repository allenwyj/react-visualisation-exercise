import React from 'react';

import {
  CoinTileHeaderContainer,
  CoinTileSymbolContainer,
  DeleteIcon
} from './coin-tile-header.styles';

const CoinTileHeader = ({ name, symbol, topSection }) => {
  return (
    <CoinTileHeaderContainer>
      <div> {name}</div>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinTileSymbolContainer>{symbol}</CoinTileSymbolContainer>
      )}
    </CoinTileHeaderContainer>
  );
};

export default CoinTileHeader;
