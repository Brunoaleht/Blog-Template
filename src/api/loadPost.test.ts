import request from 'graphql-request';
import { defaultLoadPostsVariables, loadPost } from './loadPost';
import config from '../config';

jest.mock('graphql-request');
jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY',
  };
});

describe('loadPost', () => {
  it('should call request with default variables', async () => {
    await loadPost();
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', defaultLoadPostsVariables);
  });
  it('should call request with custom variables', async () => {
    await loadPost({
      authorSlug: { eq: 'Ok' },
    });
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: { eq: 'Ok' },
    });
  });
});
