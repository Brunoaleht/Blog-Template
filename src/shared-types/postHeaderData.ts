export type PostHeaderData = {
  id: string;
  attributes: {
    createdAt: string;
    title: string;
    slug: string;
    cover: {
      coverData: {
        attributes: {
          alternativeText: null;
          url: string;
        };
      };
    };
    excerpt: string;
    author: {
      authorData: {
        id: string;
        attributes: {
          displayName: string;
          slug: string;
        };
      };
    };
    categories: {
      categoryData: [
        {
          id: string;
          attributes: {
            displayName: string;
            slug: string;
          };
        },
        {
          id: string;
          attributes: {
            displayName: string;
            slug: string;
          };
        },
      ];
    };
  };
};
