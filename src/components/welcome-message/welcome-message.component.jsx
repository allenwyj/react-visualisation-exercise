import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

const WelcomeMessage = () => {
  const { firstVisit } = useContext(AppContext);

  return (
    <div>
      {firstVisit ? (
        <h1>
          Welcome to CryptoDash, please select your favourite coins to begin.{' '}
        </h1>
      ) : null}
    </div>
  );
};

export default WelcomeMessage;
