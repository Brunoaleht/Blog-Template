import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostsTemplateProps } from '../templates/PostsTemplate';

export type LoadPostVariable = {
  sort?: string;
  start?: number;
  limit?: number;
  postSearch?: string;
  slug?: { eq: string };
  authorSlug?: { eq: string };
  categorySlug?: { eq: string };
  tagsSlug?: { eq: string };
};
export const defaultLoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 3,
};

export const loadPost = async (variables: LoadPostVariable = {}): Promise<PostsTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
