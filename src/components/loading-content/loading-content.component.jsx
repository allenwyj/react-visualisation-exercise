import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';

const LoadingContent = ({ children }) => {
  const { coinList } = useContext(AppContext);

  return <div>{!coinList ? 'Loading Coins...' : children}</div>;
};

export default LoadingContent;
