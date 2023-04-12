import { Author } from '../../shared-types/authorData';
import { Categories } from '../../shared-types/categoryData';
import { Cover } from '../../shared-types/Cover';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  createdAt: string;
  title: string;
  excerpt: string;
  cover: Cover;
  author?: Author;
  categories?: Categories;
};

export const ArticleHeader = ({ createdAt, title, excerpt, cover, author, categories }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.coverData.attributes.url} alt={title} />
      <ArticleMeta author={author} categories={categories} createdAt={createdAt} />
    </Styled.Wrapper>
  );
};
