import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
  `}
`;
export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.large};
    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
