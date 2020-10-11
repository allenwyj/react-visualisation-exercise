import React from 'react';

import Percentage from '../percentage/percentage.component';

import {
  PriceTileContainer,
  PriceTileHeaderContainer,
  TickerPriceContainer
} from './price-tile.styles';

const formatNumber = number => {
  return +(number + '').slice(0, 7);
};

const PriceTile = ({ price }) => {
  const aggreviation = Object.keys(price)[0];
  const data = price[aggreviation]['USD'];

  // if index is less than 4, passing false
  return (
    <PriceTileContainer>
      <PriceTileHeaderContainer>
        <div>{aggreviation}</div>
        <Percentage data={data} formatNumber={formatNumber} />
      </PriceTileHeaderContainer>
      <TickerPriceContainer>${formatNumber(data.PRICE)}</TickerPriceContainer>
    </PriceTileContainer>
  );
};

export default PriceTile;
