import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.large};
  `}
`;
