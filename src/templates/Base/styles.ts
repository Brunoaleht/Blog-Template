import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;
export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 50rem;
    padding: 0.5rem ${theme.spacings.small};
    @media ${theme.media.lteMedium} {
      width: 36rem;
    }
    @media ${theme.media.lteSmall} {
      width: 30rem;
    }
  `}
`;
export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding-top: ${theme.spacings.small};
  `}
`;
