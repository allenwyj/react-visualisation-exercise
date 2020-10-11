import React from 'react';

import Percentage from '../percentage/percentage.component';

import {
  PriceTileCompactContainer,
  LeftContainer
} from './price-tile-compact.styles';

const formatNumber = number => {
  return +(number + '').slice(0, 7);
};

const PriceTileCompact = ({ price }) => {
  const aggreviation = Object.keys(price)[0];
  const data = price[aggreviation]['USD'];

  // if index is less than 4, passing false
  return (
    <PriceTileCompactContainer>
      <LeftContainer>{aggreviation}</LeftContainer>
      <Percentage data={data} formatNumber={formatNumber} />
      <div>${formatNumber(data.PRICE)}</div>
    </PriceTileCompactContainer>
  );
};

export default PriceTileCompact;
