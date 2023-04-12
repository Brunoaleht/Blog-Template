import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';
import mock from './mock';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render articleHeader, cover and Content', () => {
    renderTheme(<Post {...props} />);

    expect(screen.getByRole('heading', { name: props.attributes.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.attributes.title })).toBeInTheDocument();
    expect(screen.getAllByText(/^I made this project/i)[0]).toHaveStyle({ 'font-size': '2.4rem' });
    expect(screen.findByText(/^use State to keep my data in state/i));
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Post {...props} />);
    expect(container).toMatchSnapshot();
  });
});
