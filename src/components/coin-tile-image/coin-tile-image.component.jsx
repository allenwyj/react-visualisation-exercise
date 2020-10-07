import React from 'react';

const imgUrl = 'http://cryptocompare.com/';

const CoinImage = ({ coin, style }) => (
  <img
    alt={coin.CoinSymbol}
    style={style || { height: '50px' }}
    src={`${imgUrl}${coin.ImageUrl}`}
  />
);

export default CoinImage;
