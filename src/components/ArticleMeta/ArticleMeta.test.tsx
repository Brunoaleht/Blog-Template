import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category link', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Bruno Alexandre' })).toHaveAttribute('href', '/author/bruno-alexandre');
    expect(screen.getByRole('link', { name: 'ReactJs' })).toHaveAttribute('href', '/category/react-js');
    expect(screen.getByRole('link', { name: 'JavaScript' })).toHaveAttribute('href', '/category/java-script');
  });
  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute('dateTime', props.createdAt);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
});
