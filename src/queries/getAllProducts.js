export const getAllProducts = `
query MyQuery {
    products {
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
