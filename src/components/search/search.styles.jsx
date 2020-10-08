import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../../shared/Styles';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const SearchInputContainer = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  border: 1px solid;
  height: 25px;
  place-self: center left;
  color: #1163c9;
`;
