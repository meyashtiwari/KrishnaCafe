export const addItemToCart = `
mutation MyMutation($items: [CartItemInput]!, $clientID: String) {
  __typename
  addCartItems(input: {items: $items, clientMutationId: $clientID}) {
    clientMutationId
    cart {
      contents {
        itemCount
        nodes {
          product {
            node {
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
          quantity
          subtotal
        }
      }
      total
    }
  }
}
`;
