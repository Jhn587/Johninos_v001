import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_JOHNINOSV001_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record);
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    let confirmation = await confirmPayment(record.dynamodb);
    console.log('PAYMENT_CONFIRMATION DynamoDB Record: %j confirmation: %j', record.dynamodb, confirmation);

  }
  return Promise.resolve('Successfully processed PAYMENT of DynamoDB record');
};

const confirmPayment = async (record) => {
  const id = record["Keys"]["id"]["S"];
  console.log('id: %j', id);
  const originalOrderStatus = record["NewImage"]["orderStatus"]["S"]
  console.log('originalOrderStatus: %j', originalOrderStatus);
  if (originalOrderStatus !== "placed"){
    return {"body": "order not recently placed"};
  }
  const newOrderStatus = "paid"; // customers always pay in prototype 

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const graphqlUpdateQuery = JSON.stringify({
        query: `
          mutation UpdateOrderStatus($id: ID!, $status: String!) {
            updatePizzaOrder(input: {id: $id, orderStatus: $status}) {
              id,
              orderId,
              orderStatus
            }
          }
        `,
        variables: {
          id: id,
          status: newOrderStatus
        }
  });

  console.log(graphqlUpdateQuery);

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: graphqlUpdateQuery,
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }
  return {body: body, status:statusCode};
};