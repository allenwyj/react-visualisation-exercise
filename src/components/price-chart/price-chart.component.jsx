import React, { useContext } from 'react';
import ReactHighcharts from 'react-highcharts';

import { AppContext } from '../../providers/app/app.provider';
import highchartsConfig from '../../shared/HighchartsConfig';

import { TileContainer } from '../../shared/tile.styles';

const PriceChart = () => {
  const {} = useContext(AppContext);

  return (
    <TileContainer>
      <ReactHighcharts config={highchartsConfig()} />
    </TileContainer>
  );
};

export default PriceChart;
