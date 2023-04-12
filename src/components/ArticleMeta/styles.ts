import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.darkerGray};
    font-style: italic;
    .categories span::after {
      content: ', ';
    }
    .categories span:last-child::after {
      content: '';
    }
    a {
      text-decoration: none;
      transition: all 300ms ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
