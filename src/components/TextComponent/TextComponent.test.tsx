import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<strong>html</strong>'} />);
    expect(screen.getByText('html')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={'<strong>html</strong'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2rem;
      }

      .c0 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c0 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #dddddd;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c0 .language-plaintext {
        font-size: 1.6rem;
        background: #000000;
        color: #ffffff;
      }

      .c0 p,
      .c0 pre {
        margin: 4.0rem 0;
      }

      .c0 pre {
        font-family: monospace;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
        background: #000000;
        color: #ffffff;
        padding: 2.4rem;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(60%);
        filter: brightness(60%);
      }

      .c0 img {
        max-width: 100%;
      }

      .c0 .image {
        background: #dddddd;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c0 .image figcaption {
        padding: .8rem;
        text-align: center;
        font-size: 1.6rem;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c0 ul,
      .c0 ol {
        margin: 4.0rem;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #dddddd;
      }

      .c0 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c0 table td,
      .c0 table th {
        padding: 1.6rem;
        border: 0.1rem solid #dddddd;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
      }

      <div
        class="c0"
      >
        <strong>
          html
        </strong>
      </div>
    `);
  });
});
