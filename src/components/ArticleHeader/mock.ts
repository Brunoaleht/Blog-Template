import { ArticleHeaderProps } from '.';

export default {
  createdAt: '2021-03-02T15:16:09.246+00:00',
  title: 'ReactHook Studies',
  slug: 'react-hook-studies',
  cover: {
    coverData: {
      attributes: {
        alternativeText: null,
        url: 'https://res.cloudinary.com/dxldesniw/image/upload/v1677769491/thumbnail_MKS_entrevista_87872be63c_60bb358adf.jpg',
      },
    },
  },
  excerpt:
    'I made this project using various react hooks, such as useEffect to make a call to the api, use State to keep my data in state, useContext and useReducer to do the work in the general context in the shopping cart.',
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
} as ArticleHeaderProps;
