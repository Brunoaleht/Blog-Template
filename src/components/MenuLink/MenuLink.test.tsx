import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost" text="Children" />);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(<MenuLink link="http://localhost" text="Children" newTab={true} />);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });

  it('should render open in a blank', () => {
    const { container } = renderTheme(<MenuLink link="http://localhost" text="Children" newTab={false} />);
    expect(container).toMatchSnapshot();
  });
});
