import productFragment from '../fragments/product';
import seoFragment from '../fragments/seo';

const imageFragment = /* GraphQL */ `
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    descriptionHtml
    description
    seo {
      ...seo
    }
    updatedAt
    image {
      ...image
    }
  }
  ${seoFragment}
  ${imageFragment}
`;

export const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      handle
      title
      description
      image {
        src
        altText
      }
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
          id
          title
          description
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;
