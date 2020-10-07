import styled from 'styled-components';
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from './Styles';

export const TileContainer = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
`;

export const SelectableTileContainer = styled(TileContainer)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
