import Link from 'next/link';
import { Heading } from '../Heading';
import { PostProps } from '../Post';
import * as Styled from './styles';

export type PostCardProps = PostProps;

export const PostCard = ({ attributes }: PostCardProps) => {
  return (
    <Styled.Wrapper style={{ maxWidth: '32rem' }}>
      <Link href={`/post/${attributes.slug}`}>
        <Styled.Cover src={attributes.cover.coverData.attributes.url} />
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${attributes.slug}`}>{attributes.title}</Link>
      </Heading>
      <Styled.Excerpt>{attributes.excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
