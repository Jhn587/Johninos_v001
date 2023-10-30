/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPizzaOrder = /* GraphQL */ `
  query GetPizzaOrder($id: ID!) {
    getPizzaOrder(id: $id) {
      id
      orderId
      customerId
      storeId
      orderStatus
      pizzas
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPizzaOrders = /* GraphQL */ `
  query ListPizzaOrders(
    $filter: ModelPizzaOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPizzaOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        customerId
        storeId
        orderStatus
        pizzas
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
