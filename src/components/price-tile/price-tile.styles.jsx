import styled, { css } from 'styled-components';

import { SelectableTileContainer } from '../../shared/tile.styles';
import { fontSizeBig, greenBoxShadow } from '../../shared/Styles';

export const PriceTileHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PriceTileContainer = styled(SelectableTileContainer)`
  ${props =>
    props.currentFavourite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `};
`;

export const TickerPriceContainer = styled.div`
  ${fontSizeBig};
`;
