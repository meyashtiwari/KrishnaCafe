export const getFeaturedProducts = `
query MyQuery {
    products(where: {featured: true}) {
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
