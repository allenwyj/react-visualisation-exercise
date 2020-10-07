import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

import { CoinGridStyled } from './coin-grid.styles';

const CoinGrid = () => {
  const { coinList } = useContext(AppContext);

  return (
    <CoinGridStyled>
      {Object.keys(coinList).map(coinKey => (
        <div>{coinKey}</div>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
