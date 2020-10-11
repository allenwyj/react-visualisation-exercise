import styled from 'styled-components';

import { SelectableTileContainer } from '../../shared/tile.styles';
import { fontSize3 } from '../../shared/Styles';

export const PriceTileCompactContainer = styled(SelectableTileContainer)`
  display: grid;
  ${fontSize3};
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: right;
`;

export const LeftContainer = styled.div`
  justify-self: left;
`;
