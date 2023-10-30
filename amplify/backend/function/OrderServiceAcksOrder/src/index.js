
const AWS = require('aws-sdk');
import { API } from "aws-amplify";

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const orderId = event.orderId;
  const status = "paid";

  const graphqlUpdateData = JSON.stringify({
        query: `
          mutation UpdateOrderStatus($orderId: String!, $status: String!) {
            updatePizzaOrder(input: {orderId: $orderId, orderStatus: $status}) {
              orderId
              orderStatus
            }
          }
        `,
        variables: {
          orderId: orderId,
          status: status
        }
    });

  await API.graphql({
              query: graphqlUpdateData,
              variables: { $orderId: orderId, status: "paid" },
            });

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
         headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "*"
         },
        body: JSON.stringify('Customer Payment Confirmed'),
    };
};



// const https = require('https');
// const AWS = require('aws-sdk');
// const appsync = new AWS.HttpClient();


// exports.handler = async (event) => {


//   const endpoint = 'YOUR_APPSYNC_ENDPOINT_URL'; // Replace with your AppSync endpoint
//   const apiKey = 'YOUR_APPSYNC_API_KEY'; // Replace with your AppSync API Key

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-api-key': apiKey
//     }
//   };

//   return new Promise((resolve, reject) => {
//     const req = https.request(endpoint, requestOptions, (res) => {
//       let data = '';
//       res.on('data', (chunk) => {
//         data += chunk;
//       });
//       res.on('end', () => {
//         resolve(JSON.parse(data));
//       });
//     });

//     req.on('error', (error) => {
//       reject(error);
//     });

//     req.write(graphqlData);
//     req.end();
//   });
// };