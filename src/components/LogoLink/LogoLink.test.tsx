import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink, LogoLinkProps } from '.';
import mock from './mock';

const props: LogoLinkProps = mock;
const propsNotLogo: LogoLinkProps = {
  logo: {
    logoData: {
      attributes: {
        alternativeText: null,
        url: null,
      },
    },
  },
};

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="/" text="Olá mundo" imgUrl="image.jpg" logo={props.logo} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', props.logo.logoData.attributes.url);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Olá mundo');
  });
  it('should render without image logo', () => {
    renderTheme(<LogoLink link="/" text="Olá mundo" imgUrl="image.jpg" logo={propsNotLogo.logo} />);
    expect(screen.getByText('Olá mundo')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  it('should render image logo and newTab True', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" imgUrl="image.jpg" newTab={true} logo={props.logo} />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('img')).toHaveAttribute('src', props.logo.logoData.attributes.url);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" imgUrl="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
