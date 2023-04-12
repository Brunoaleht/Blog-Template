import { ArticleMetaProps } from '.';

export default {
  createdAt: '2021-03-02T15:16:09.246+00:00',
  author: {
    authorData: {
      id: '1',
      attributes: {
        displayName: 'Bruno Alexandre',
        slug: 'bruno-alexandre',
      },
    },
  },
  categories: {
    categoryData: [
      {
        id: '2',
        attributes: {
          displayName: 'ReactJs',
          slug: 'react-js',
        },
      },
      {
        id: '1',
        attributes: {
          displayName: 'JavaScript',
          slug: 'java-script',
        },
      },
    ],
  },
} as ArticleMetaProps;
