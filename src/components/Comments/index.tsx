import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id?: string;
  attributes: {
    title: string;
    allowComments?: boolean;
    slug: string;
  };
};

export const Comments = ({ id, attributes }: CommentsProps) => {
  if (!attributes.allowComments) return null;
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-bruno-alexandre"
        config={{
          url: `/post/${attributes.slug}`,
          identifier: id,
          title: attributes.title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
