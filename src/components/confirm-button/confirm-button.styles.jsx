import styled from 'styled-components';

import { fontSize1, greenBoxShadow, color3 } from '../../shared/Styles';

export const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  padding: 5px;
  ${fontSize1};
  cursor: pointer;

  &:hover {
    ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
