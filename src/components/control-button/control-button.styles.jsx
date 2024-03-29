import styled, { css } from 'styled-components';

export const ControlbuttonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 25px red;
    `};
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
`;
