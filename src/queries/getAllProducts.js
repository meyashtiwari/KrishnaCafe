export const getAllProducts = `
query MyQuery {
  products(first: 15) {
    nodes {
      ... on SimpleProduct {
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
