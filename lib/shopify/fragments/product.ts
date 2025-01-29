import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    metafields(identifiers: [{ namespace: "custom", key: "artist" }, { namespace: "custom", key: "type" }, { namespace: "custom", key: "volume" }]) {
      namespace
      key
      value
    }
    collections(first: 1) {
      edges {
        node {
          id
          handle
          title
          description
        }
      }
    }
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;
