import { useState } from 'react';
import { LoadPostVariable, loadPost } from '../../api/loadPost';
import { PostGrid } from '../../components/PostGrid';
import { Posts } from '../../shared-types/Posts';
import { Setting } from '../../shared-types/setting';
import { Base } from '../Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  setting?: Setting;
  posts?: Posts;
  variable?: LoadPostVariable;
};

export const PostsTemplate = ({ setting, posts, variable }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariable, setStateVariable] = useState(variable);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const handleLoadMorePosts = async () => {
    setBtnDisabled(true);

    const newVariable = {
      ...stateVariable,
      start: stateVariable.start + stateVariable.limit,
      limit: stateVariable.limit,
    };
    const morePosts = await loadPost(newVariable);
    if (!morePosts || !morePosts.posts.postData || !morePosts.posts.postData.length) {
      setNoMorePosts(true);
      return;
    }
    const newPostsData = [...posts.postData, ...morePosts.posts.postData];
    const newPosts = { postData: newPostsData };
    setBtnDisabled(false);
    setStateVariable(newVariable);
    setStatePosts(newPosts);
  };
  return (
    <Base setting={setting}>
      <PostGrid postData={statePosts.postData} />
      {statePosts.postData && statePosts.postData.length ? (
        <Styled.ButtonContainer>
          <Styled.Button onClick={handleLoadMorePosts} disabled={btnDisabled}>
            {noMorePosts ? 'Sem Mais Posts' : 'Carregar Posts'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </Base>
  );
};
