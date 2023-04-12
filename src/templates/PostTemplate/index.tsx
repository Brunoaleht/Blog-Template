import { Comments } from '../../components/Comments';
import { Post, PostProps } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { Setting } from '../../shared-types/setting';
import { Base } from '../Base';
import * as Styled from './styles';

export type PostTemplateProps = {
  setting?: Setting;
  post?: PostProps;
};

export const PostTemplate = ({ setting, post }: PostTemplateProps) => {
  return (
    <Base setting={setting}>
      <Post attributes={post.attributes} />
      <Styled.TagsContainer>
        <PostTags tags={post.attributes.tags} />
      </Styled.TagsContainer>
      <Comments id={post.id} attributes={post.attributes} />
    </Base>
  );
};
