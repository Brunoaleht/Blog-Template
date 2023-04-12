import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';
import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render Base with Elements: Header, Menu, Footer', () => {
    renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('img', { name: 'Bruno Alexandre - Blog de ideias e de projetos realizados' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close')).toBeInTheDocument();
    expect(screen.getByText('feito com amor')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Base {...props} />);
    expect(container).toMatchSnapshot();
  });
});
