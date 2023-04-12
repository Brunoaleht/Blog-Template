import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment img on UploadFile {
    alternativeText
    url
  }
  fragment author on AuthorEntity {
    id
    attributes {
      displayName
      slug
    }
  }
  fragment category on CategoryEntity {
    id
    attributes {
      displayName
      slug
    }
  }
  fragment tags on TagEntity {
    id
    attributes {
      displayName
      slug
    }
  }
  fragment cover on Post {
    cover {
      coverData: data {
        attributes {
          ...img
        }
      }
    }
  }
  fragment authorPost on Post {
    author {
      authorData: data {
        ...author
      }
    }
  }
  fragment categoryPost on Post {
    categories {
      categoryData: data {
        ...category
      }
    }
  }
  fragment tagsPost on Post {
    tags {
      tagsData: data {
        ...tags
      }
    }
  }
  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }
  fragment settings on SettingEntityResponse {
    settingData: data {
      identificador: id
      attributes {
        blogName
        blogDescription
        textFooter
        logo {
          logoData: data {
            attributes {
              ...img
            }
          }
        }
        menuLink {
          ...menuLink
        }
      }
    }
  }
  fragment posts on PostEntityResponseCollection {
    postData: data {
      id
      attributes {
        createdAt
        title
        slug
        ...cover
        excerpt
        content
        allowComments
        ...tagsPost
        ...categoryPost
        ...authorPost
      }
    }
  }
`;
