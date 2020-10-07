import styled from 'styled-components';
import { DeletableTileContainer } from '../../shared/tile.styles';

export const CoinTileHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinTileSymbolContainer = styled.div`
  justify-self: right;
`;

// When hovering the DeletableTileContainer, display these new CSS properties
export const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTileContainer}:hover & {
    display: block;
    color: red;
  }
`;
