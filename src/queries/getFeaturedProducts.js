export const getFeaturedProducts = `
query MyQuery {
    products(where: {featured: true}) {
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
