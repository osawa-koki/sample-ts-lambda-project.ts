import {
  type APIGatewayEvent,
  type APIGatewayProxyHandler,
  type APIGatewayProxyResult,
  type Context
} from 'aws-lambda'

export const lambdaHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
      event,
      context
    })
  }
}
