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
      {
        // If topSection is true, then display delete icon on the right-top corner
      }
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinTileSymbolContainer>{symbol}</CoinTileSymbolContainer>
      )}
    </CoinTileHeaderContainer>
  );
};

export default CoinTileHeader;
