import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BtnToggleTheme } from '.';
import { theme } from '../../styles/theme';

describe('<BtnToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem('theme', JSON.stringify({ ...theme, name: 'inverted' }));
  });
  afterEach(() => {
    localStorage.removeItem('theme');
  });
  it('should render input without theme', () => {
    localStorage.removeItem('theme');
    renderTheme(<BtnToggleTheme />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
  it('should render input with default theme', () => {
    localStorage.setItem('theme', JSON.stringify({ ...theme, name: 'default' }));
    renderTheme(<BtnToggleTheme />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
  it('should render input checked with inverted theme', () => {
    renderTheme(<BtnToggleTheme />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  it('should render input and toggle between theme toggling input', () => {
    const { container } = renderTheme(<BtnToggleTheme />);
    const label = screen.getByLabelText('Toggle light and dark mode');
    const input = screen.getByRole('checkbox');

    fireEvent.click(label);
    expect(input).not.toBeChecked();
    fireEvent.click(label);
    expect(input).toBeChecked();

    expect(container).toMatchSnapshot();
  });
});
