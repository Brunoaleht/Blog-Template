import styled, { css } from 'styled-components';
import { Title as HeadingStyle } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${theme.spacings.huge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.textDark};
    font-size: ${theme.fonts.sizes.small};
    margin: 0 auto;
    ${HeadingStyle} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }
    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      & > ${HeadingStyle} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;
    p {
      margin-top: 0;
    }
    @media ${theme.media.lteSmall} {
      margin-left: 0;
    }
  `}
`;
