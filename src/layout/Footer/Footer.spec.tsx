import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'# Olá'} />);
    expect(screen.getByText('# Olá')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        border-top: solid 0.1rem #dddddd;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c1 {
        font-size: 2rem;
      }

      .c1 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c1 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #dddddd;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c1 .language-plaintext {
        font-size: 1.6rem;
        background: #000000;
        color: #ffffff;
      }

      .c1 p,
      .c1 pre {
        margin: 4.0rem 0;
      }

      .c1 pre {
        font-family: monospace;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
        background: #000000;
        color: #ffffff;
        padding: 2.4rem;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(60%);
        filter: brightness(60%);
      }

      .c1 img {
        max-width: 100%;
      }

      .c1 .image {
        background: #dddddd;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c1 .image figcaption {
        padding: .8rem;
        text-align: center;
        font-size: 1.6rem;
        line-height: 1.3;
      }

      .c1 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c1 ul,
      .c1 ol {
        margin: 4.0rem;
      }

      .c1 hr {
        border: none;
        border-bottom: 0.1rem solid #dddddd;
      }

      .c1 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c1 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c1 table td,
      .c1 table th {
        padding: 1.6rem;
        border: 0.1rem solid #dddddd;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 2rem;
        }

        .c1 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            # Olá
          </div>
        </footer>
      </div>
    `);
  });
});
