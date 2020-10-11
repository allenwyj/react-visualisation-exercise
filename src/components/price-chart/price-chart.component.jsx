import React, { useContext } from 'react';
import ReactHighcharts from 'react-highcharts';

import { AppContext } from '../../providers/app/app.provider';
import highchartsConfig from '../highcharts/HighchartsConfig';
import HighchartsTheme from '../highcharts/HighchartsTheme';

import { TileContainer } from '../../shared/tile.styles';

// setting a dark theme for highcharts
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  const {} = useContext(AppContext);

  return (
    <TileContainer>
      <ReactHighcharts config={highchartsConfig()} />
    </TileContainer>
  );
};

export default PriceChart;
