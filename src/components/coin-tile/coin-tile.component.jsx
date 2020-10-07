import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

import CoinTileHeader from '../coin-tile-header/coin-tile-header.component';
import CoinImage from '../coin-tile-image/coin-tile-image.component';

import { SelectableTileContainer } from '../../shared/tile.styles';

const CoinTile = ({ coinKey }) => {
  const { coinList } = useContext(AppContext);

  const coin = coinList[coinKey];

  return (
    <SelectableTileContainer>
      <CoinTileHeader name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </SelectableTileContainer>
  );
};

export default CoinTile;
