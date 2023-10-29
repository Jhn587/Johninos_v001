/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePizzaOrder = /* GraphQL */ `
  subscription OnCreatePizzaOrder(
    $filter: ModelSubscriptionPizzaOrderFilterInput
  ) {
    onCreatePizzaOrder(filter: $filter) {
      id
      orderId
      customerId
      storeId
      pizzas
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePizzaOrder = /* GraphQL */ `
  subscription OnUpdatePizzaOrder(
    $filter: ModelSubscriptionPizzaOrderFilterInput
  ) {
    onUpdatePizzaOrder(filter: $filter) {
      id
      orderId
      customerId
      storeId
      pizzas
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePizzaOrder = /* GraphQL */ `
  subscription OnDeletePizzaOrder(
    $filter: ModelSubscriptionPizzaOrderFilterInput
  ) {
    onDeletePizzaOrder(filter: $filter) {
      id
      orderId
      customerId
      storeId
      pizzas
      createdAt
      updatedAt
      __typename
    }
  }
`;
