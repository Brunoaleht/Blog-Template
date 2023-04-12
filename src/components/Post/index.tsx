import { Author } from '../../shared-types/authorData';
import { Categories } from '../../shared-types/categoryData';
import { Cover } from '../../shared-types/Cover';
import { PostTagsData } from '../../shared-types/postTagsData';
import { ArticleHeader } from '../ArticleHeader';
import { PostContainer } from '../PostContainer';
import { HtmlContent } from '../TextComponent';
import * as Styled from './styles';

export type PostProps = {
  id?: string;
  attributes: {
    createdAt?: string;
    title: string;
    excerpt: string;
    content: string;
    cover: Cover;
    author?: Author;
    categories?: Categories;
    tags?: PostTagsData;
    allowComments?: boolean;
    slug: string;
  };
};

export const Post = ({ attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          createdAt={attributes.createdAt}
          author={attributes.author}
          excerpt={attributes.excerpt}
          title={attributes.title}
          cover={attributes.cover}
          categories={attributes.categories}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={attributes.content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
