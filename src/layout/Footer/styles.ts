import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: solid 0.1rem ${theme.colors.mediumGray};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.large};
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
