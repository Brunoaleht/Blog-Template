import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BtnToggleTheme } from '.';

describe('<BtnToggleTheme />', () => {
  it('should render', () => {
    renderTheme(<BtnToggleTheme />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
