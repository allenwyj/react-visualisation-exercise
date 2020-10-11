import React from 'react';

import { NumberContainer, ChangePercentContainer } from './percentage.styles';

const Percentage = ({ data, formatNumber }) => {
  return (
    <NumberContainer>
      <ChangePercentContainer red={data.CHANGEPCT24HOUR > 0}>
        {formatNumber(data.CHANGEPCT24HOUR)}
      </ChangePercentContainer>
    </NumberContainer>
  );
};

export default Percentage;
