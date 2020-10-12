import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

import { ChartSelectContainer } from './chart-select.styles';

const ChartSelect = () => {
  const { changeChartSelect } = useContext(AppContext);

  return (
    <ChartSelectContainer
      defaultValue={'months'}
      onChange={e => changeChartSelect(e.target.value)}
    >
      <option value="days">Days</option>
      <option value="weeks">Weeks</option>
      <option value="months">Months</option>
    </ChartSelectContainer>
  );
};

export default ChartSelect;
