import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

import { CoinGridStyled } from './coin-grid.styles';
import { SelectableTileContainer } from '../../shared/tile.styles';

const CoinGrid = () => {
  const { coinList } = useContext(AppContext);

  return (
    <CoinGridStyled>
      {Object.keys(coinList).map(coinKey => (
        <SelectableTileContainer>{coinKey}</SelectableTileContainer>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
