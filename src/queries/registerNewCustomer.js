export const registerNewCustomer = `
mutation MyMutation($Email: String!, $FName: String!, $LName: String!, $Pwd: String!) {
    __typename
    registerCustomer(input: {email: $Email, firstName: $FName, lastName: $LName, password: $Pwd}) {
      customer {
        databaseId
        sessionToken
      }
    }
}
`;
