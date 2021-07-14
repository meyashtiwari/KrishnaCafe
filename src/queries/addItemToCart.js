export const addItemToCart = `
mutation MyMutation($items: [CartItemInput]!, $clientID: String) {
  __typename
  addCartItems(input: {items: $items, clientMutationId: $clientID}) {
    clientMutationId
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
