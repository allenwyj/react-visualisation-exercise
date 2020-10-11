import React from 'react';

import { CoinImageContainer } from './coin-tile-image.styles';

const imgUrl = 'http://cryptocompare.com/';

const CoinImage = ({ coin, chartCoin }) => (
  <CoinImageContainer
    chartCoin={chartCoin}
    alt={coin.CoinSymbol}
    src={`${imgUrl}${coin.ImageUrl}`}
  />
);

export default CoinImage;
