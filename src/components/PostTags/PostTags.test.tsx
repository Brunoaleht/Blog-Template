import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

const props: PostTagsProps = mock;
const propsNotTag: PostTagsProps = {
  tags: {
    tagsData: [],
  },
};

describe('<PostTags />', () => {
  it('should render two tags', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
  it('should render not tags', () => {
    renderTheme(<PostTags tags={propsNotTag.tags} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);
    expect(container).toMatchSnapshot();
  });
});
