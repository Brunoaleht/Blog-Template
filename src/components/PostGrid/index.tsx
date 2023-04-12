import { PostProps } from '../Post';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  postData?: PostProps[];
};

export const PostGrid = ({ postData = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {postData.length === 0 ? (
        <Styled.NotFound>Nenhum Post Encontrado</Styled.NotFound>
      ) : (
        <Styled.Grid>
          {postData.map((post) => (
            <PostCard key={post.id} attributes={post.attributes} />
          ))}
        </Styled.Grid>
      )}
    </Styled.Wrapper>
  );
};
