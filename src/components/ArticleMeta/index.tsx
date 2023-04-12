import Link from 'next/link';
import { Author } from '../../shared-types/authorData';
import { Categories } from '../../shared-types/categoryData';
import { formatDate } from '../../utils/formt-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt?: string;
  author?: Author;
  categories?: Categories;
};

export const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author.authorData !== undefined && (
          <>
            <span>Por: </span>
            <Link href={`/author/${author.authorData.attributes.slug}`}>
              {author.authorData.attributes.displayName}
            </Link>
            <span className="separador"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {categories && categories.categoryData.length > 0 && (
          <>
            <span className="separador"> | </span>
            <span className="categories">
              {categories.categoryData.map((category) => (
                <span key={`article-meta-cat-${category.id}`}>
                  <Link href={`/category/${category.attributes.slug}`}>{category.attributes.displayName}</Link>
                </span>
              ))}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
