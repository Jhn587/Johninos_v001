/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPizzaOrder = /* GraphQL */ `
  mutation CreatePizzaOrder(
    $input: CreatePizzaOrderInput!
    $condition: ModelPizzaOrderConditionInput
  ) {
    createPizzaOrder(input: $input, condition: $condition) {
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
export const updatePizzaOrder = /* GraphQL */ `
  mutation UpdatePizzaOrder(
    $input: UpdatePizzaOrderInput!
    $condition: ModelPizzaOrderConditionInput
  ) {
    updatePizzaOrder(input: $input, condition: $condition) {
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
export const deletePizzaOrder = /* GraphQL */ `
  mutation DeletePizzaOrder(
    $input: DeletePizzaOrderInput!
    $condition: ModelPizzaOrderConditionInput
  ) {
    deletePizzaOrder(input: $input, condition: $condition) {
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
