import styled, { css } from 'styled-components';
import { Title as HeadingStyle } from '../Heading/styles';
export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    ${HeadingStyle} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.fonts.sizes.medium};
  `}
`;
export const Cover = styled.img`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
