export const getProductByID = `
query MyQuery($id:ID!) {
    product(id: $id, idType: DATABASE_ID) {
      ... on SimpleProduct {
        name
        image {
          sourceUrl
        }
        price
      }
    }
  }
`;
