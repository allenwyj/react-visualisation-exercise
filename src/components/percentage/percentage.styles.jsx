import styled, { css } from 'styled-components';

export const NumberContainer = styled.div`
  justify-self: right;
`;

export const ChangePercentContainer = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;
