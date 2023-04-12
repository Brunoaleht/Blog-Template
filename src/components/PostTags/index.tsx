import Link from 'next/link';
import { PostTagsData } from '../../shared-types/postTagsData';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: PostTagsData;
};

export const PostTags = ({ tags }: PostTagsProps) => {
  if (tags.tagsData.length === 0) {
    return null;
  }
  return (
    <Styled.Wrapper>
      Tags:
      {tags.tagsData.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.attributes.slug}`}>{tag.attributes.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
