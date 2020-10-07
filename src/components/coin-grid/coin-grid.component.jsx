import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';
import { getCoinsToDisplay } from './coin-grid.utils';

import CoinTile from '../../components/coin-tile/coin-tile.component';

import { CoinGridStyled } from './coin-grid.styles';

const CoinGrid = () => {
  const { coinList } = useContext(AppContext);

  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList).map(coinKey => (
        <CoinTile coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
