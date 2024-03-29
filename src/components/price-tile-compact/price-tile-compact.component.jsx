import React, { useContext } from 'react';

import Percentage from '../percentage/percentage.component';

import { AppContext } from '../../providers/app/app.provider';

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
  const { currentFavourite, setCurrentFavourite } = useContext(AppContext);

  // if index is less than 4, passing false
  return (
    <PriceTileCompactContainer
      onClick={() => setCurrentFavourite(aggreviation)}
      currentFavourite={currentFavourite === aggreviation}
    >
      <LeftContainer>{aggreviation}</LeftContainer>
      <Percentage data={data} formatNumber={formatNumber} />
      <div>${formatNumber(data.PRICE)}</div>
    </PriceTileCompactContainer>
  );
};

export default PriceTileCompact;
