import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

import CoinTileHeader from '../coin-tile-header/coin-tile-header.component';
import CoinImage from '../coin-tile-image/coin-tile-image.component';

import {
  SelectableTileContainer,
  DeletableTileContainer,
  DisabledTileContainer
} from '../../shared/tile.styles';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

const CoinTile = ({ coinKey, topSection }) => {
  const { coinList, addCoin, removeCoin, isInFavourites } = useContext(
    AppContext
  );
  const coin = coinList[coinKey];
  // Defining the tile container class, by default is CoinGridContainer
  let TileContainerClass = SelectableTileContainer;

  if (topSection) {
    TileContainerClass = DeletableTileContainer;
  } else if (isInFavourites(coinKey)) {
    TileContainerClass = DisabledTileContainer;
  }

  return (
    <TileContainerClass
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinTileHeader
        name={coin.CoinName}
        symbol={coin.Symbol}
        topSection={topSection}
      />
      <CoinImage coin={coin} />
    </TileContainerClass>
  );
};

export default CoinTile;
