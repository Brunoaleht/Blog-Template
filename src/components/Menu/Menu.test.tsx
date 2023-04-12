import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render ButtonMenu', () => {
    renderTheme(<Menu {...props} menuLink={undefined} />);
    const buttonMenu = screen.getByRole('button', { name: 'Open/Close' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonMenu).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
  it('should render ButtonMenu with Links and on Click the Button', () => {
    renderTheme(<Menu {...props} />);
    const buttonMenu = screen.getByRole('button', { name: 'Open/Close' });
    fireEvent.click(buttonMenu);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logo' })).toBeInTheDocument();

    fireEvent.click(buttonMenu);
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
