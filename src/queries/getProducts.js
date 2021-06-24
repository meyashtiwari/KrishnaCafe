export const getProducts = `
query MyQuery {
  products(where: {category: "Breakfast and Snacks"}) {
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
