import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_POSTS(
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
    $postSearch: String
    $slug: StringFilterInput
    $authorSlug: StringFilterInput
    $categorySlug: StringFilterInput
    $tagsSlug: StringFilterInput
  ) {
    setting {
      ...settings
    }
    posts(
      sort: $sort
      pagination: { start: $start, limit: $limit }
      filters: {
        slug: $slug
        title: { containsi: $postSearch }
        author: { slug: $authorSlug }
        categories: { slug: $categorySlug }
        tags: { slug: $tagsSlug }
      }
    ) {
      ...posts
    }
  }
`;
