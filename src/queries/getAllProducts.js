export const getAllProducts = `
query MyQuery {
  products(first: 15) {
    nodes {
      ... on SimpleProduct {
        databaseId
        name
        price
        image {
          sourceUrl
        }
      }
    }
  }
}
`;
