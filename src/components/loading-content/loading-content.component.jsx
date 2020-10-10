import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

const LoadingContent = ({ children }) => {
  const { coinList, prices, firstVisit } = useContext(AppContext);

  if (!coinList) {
    return <div>Loading Coins...</div>;
  }

  if (!firstVisit && !prices) {
    return <div>Loading Prices...</div>;
  }

  return <div>{children}</div>;
};

export default LoadingContent;
