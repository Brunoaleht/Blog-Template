import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)}
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled.h1<Pick<HeadingProps, 'colorDark' | 'size' | 'uppercase'>>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    line-height: 1.2;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
