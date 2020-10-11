import React, { useContext } from 'react';

import Percentage from '../percentage/percentage.component';
import { AppContext } from '../../providers/app/app.provider';

import {
  PriceTileContainer,
  PriceTileHeaderContainer,
  TickerPriceContainer
} from './price-tile.styles';

const formatNumber = number => {
  return +(number + '').slice(0, 7);
};

const PriceTile = ({ price }) => {
  const { currentFavourite, setCurrentFavourite } = useContext(AppContext);
  const aggreviation = Object.keys(price)[0];
  const data = price[aggreviation]['USD'];

  // if index is less than 4, passing false
  return (
    <PriceTileContainer
      onClick={() => setCurrentFavourite(aggreviation)}
      currentFavourite={currentFavourite === aggreviation}
    >
      <PriceTileHeaderContainer>
        <div>{aggreviation}</div>
        <Percentage data={data} formatNumber={formatNumber} />
      </PriceTileHeaderContainer>
      <TickerPriceContainer>${formatNumber(data.PRICE)}</TickerPriceContainer>
    </PriceTileContainer>
  );
};

export default PriceTile;
