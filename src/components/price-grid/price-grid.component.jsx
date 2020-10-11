import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

import PriceTile from '../price-tile/price-tile.component';
import PriceTileCompact from '../price-tile-compact/price-tile-compact.component';

import { PriceGridContainer } from './price-grid.styles';

const PriceGrid = () => {
  const { prices } = useContext(AppContext);

  return (
    <PriceGridContainer>
      {prices.map((price, index) => {
        const PriceTileClass = index < 5 ? PriceTile : PriceTileCompact;

        return <PriceTileClass key={`priceTileClass-${index}`} price={price} />;
      })}
    </PriceGridContainer>
  );
};

export default PriceGrid;
