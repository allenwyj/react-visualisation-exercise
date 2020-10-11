import React, { useContext } from 'react';
import ReactHighcharts from 'react-highcharts';

import { AppContext } from '../../providers/app/app.provider';
import highchartsConfig from '../highcharts/HighchartsConfig';
import HighchartsTheme from '../highcharts/HighchartsTheme';

import { TileContainer } from '../../shared/tile.styles';

// setting a dark theme for highcharts
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  const { historical } = useContext(AppContext);

  return (
    <TileContainer>
      {historical ? (
        <ReactHighcharts config={highchartsConfig(historical)} />
      ) : (
        <div> Loading Chart </div>
      )}
    </TileContainer>
  );
};

export default PriceChart;
