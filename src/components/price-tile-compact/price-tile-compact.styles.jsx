import styled, { css } from 'styled-components';

import { SelectableTileContainer } from '../../shared/tile.styles';
import { fontSize3, greenBoxShadow } from '../../shared/Styles';

export const PriceTileCompactContainer = styled(SelectableTileContainer)`
  display: grid;
  ${fontSize3};
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: right;
  ${props =>
    props.currentFavourite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `};
`;

export const LeftContainer = styled.div`
  justify-self: left;
`;
