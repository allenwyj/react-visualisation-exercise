import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

import { ConfirmButtonStyled, CenterDiv } from './confirm-button.styles';

const ConfirmButton = () => {
  const { confirmFavourites } = useContext(AppContext);

  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={confirmFavourites}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
};

export default ConfirmButton;
