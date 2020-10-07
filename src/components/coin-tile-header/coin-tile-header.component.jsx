import React from 'react';

import {
  CoinTileHeaderContainer,
  CoinTileSymbolContainer
} from './coin-tile-header.styles';

const CoinTileHeader = ({ name, symbol }) => {
  return (
    <CoinTileHeaderContainer>
      <div> {name}</div>
      <CoinTileSymbolContainer>{symbol}</CoinTileSymbolContainer>
    </CoinTileHeaderContainer>
  );
};

export default CoinTileHeader;
