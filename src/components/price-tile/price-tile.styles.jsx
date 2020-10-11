import styled from 'styled-components';

import { SelectableTileContainer } from '../../shared/tile.styles';
import { fontSizeBig } from '../../shared/Styles';

export const PriceTileHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PriceTileContainer = styled(SelectableTileContainer)``;

export const TickerPriceContainer = styled.div`
  ${fontSizeBig};
`;
