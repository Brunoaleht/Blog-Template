import { useEffect, useState } from 'react';
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
  const [statePostsData, setStatePostsData] = useState(posts.postData);
  const [stateVariable, setStateVariable] = useState(variable);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePostsData(posts.postData);
    setNoMorePosts(false);
    setBtnDisabled(false);
    setStateVariable(variable);
  }, [posts.postData, variable]);
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
    setBtnDisabled(false);
    setStateVariable(newVariable);
    setStatePostsData((p) => [...p, ...morePosts.posts.postData]);
  };
  return (
    <Base setting={setting}>
      <PostGrid postData={statePostsData} />
      {statePostsData && statePostsData.length ? (
        <Styled.ButtonContainer>
          <Styled.Button onClick={handleLoadMorePosts} disabled={btnDisabled}>
            {noMorePosts ? 'Sem Mais Posts' : 'Carregar Posts'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </Base>
  );
};
