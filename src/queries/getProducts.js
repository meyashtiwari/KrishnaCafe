export const getProducts = `
query {
    productCategories(where: {name: "Breakfast and Snacks"}) {
      edges {
        node {
          products {
            edges {
              node {
                ... on SimpleProduct {
                  id
                  name
                  price
                  image {
                    altText
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
`