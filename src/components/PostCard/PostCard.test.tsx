import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(<PostCard {...props} />);

    expect(screen.getByRole('heading', { name: props.attributes.title })).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', props.attributes.cover.coverData.attributes.url);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', `/post/${props.attributes.slug}`);
    expect(screen.getByText(props.attributes.excerpt)).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
