import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';
import { getCoinsToDisplay } from './coin-grid.utils';

import CoinTile from '../../components/coin-tile/coin-tile.component';

import { CoinGridContainer } from './coin-grid.styles';

const CoinGrid = ({ topSection }) => {
  const { coinList, favourites } = useContext(AppContext);

  return (
    <CoinGridContainer>
      {getCoinsToDisplay(coinList, topSection, favourites).map(coinKey => (
        <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
      ))}
    </CoinGridContainer>
  );
};

export default CoinGrid;
