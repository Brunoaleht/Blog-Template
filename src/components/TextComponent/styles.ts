import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: 2rem;
    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }
    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.fonts.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }
    .language-plaintext {
      font-size: ${theme.fonts.sizes.small};
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    p,
    pre {
      margin: ${theme.spacings.xlarge} 0;
    }
    pre {
      font-family: monospace;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.fonts.sizes.small};
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: ${theme.spacings.medium};
    }
    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    a:hover {
      filter: brightness(60%);
    }

    img {
      max-width: 100%;
    }
    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }
    .image figcaption {
      padding: ${theme.spacings.xsmall};
      text-align: center;
      font-size: ${theme.fonts.sizes.small};
      line-height: 1.3;
    }
    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }
    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }
    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }
    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }
    @media ${theme.media.lteMedium} {
      font-size: 2rem;
      .image-style-side {
        float: none;
        max-width: 100%;
        margin: 0;
      }
    }
  `}
`;
