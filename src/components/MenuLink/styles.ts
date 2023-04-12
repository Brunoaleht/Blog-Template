import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 300ms ease-in-out;
    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
