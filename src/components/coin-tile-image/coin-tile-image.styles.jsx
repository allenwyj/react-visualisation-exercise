import styled, { css } from 'styled-components';

export const CoinImageContainer = styled.img`
  height: 50px;
  ${props =>
    props.chartCoin &&
    css`
      height: 200px;
      display: block;
      margin: 0 auto;
    `};
`;
