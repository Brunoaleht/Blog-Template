import styled, { css } from 'styled-components';

import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    ${HeadingStyles} {
      margin: ${theme.spacings.xsmall} 0 ${theme.spacings.small} 0;
    }
    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:hover a,
    &:hover img {
      color: ${theme.colors.secondary};
      opacity: 0.8;
    }
  `}
`;
export const Cover = styled.img`
  ${() => css`
    width: 100%;
    transition: opacity 300ms ease-in-out;
  `}
`;
export const Excerpt = styled.p`
  ${() => css`
    margin-top: 0;
  `}
`;
