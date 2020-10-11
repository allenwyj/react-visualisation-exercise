import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';
import CoinTileImage from '../coin-tile-image/coin-tile-image.component';

import { TileContainer } from '../../shared/tile.styles';
import { HeaderTextContainer } from './chart-header.styles';

const ChartHeader = () => {
  const { currentFavourite, coinList } = useContext(AppContext);

  return (
    <TileContainer>
      <HeaderTextContainer>
        {coinList[currentFavourite].CoinName}
      </HeaderTextContainer>
      <CoinTileImage chartCoin coin={coinList[currentFavourite]} />
    </TileContainer>
  );
};

export default ChartHeader;
