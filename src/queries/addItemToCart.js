export const addItemToCart = `
mutation MyMutation {
  __typename
  addCartItems(input: {items: [{productId: 61, quantity: 2},{productId: 35, quantity: 2}], clientMutationId: "123"}) {
    cart {
      isEmpty
      total
      contents {
        itemCount
        nodes {
          product {
            node {
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
      }
    }
  }
} 
`;
