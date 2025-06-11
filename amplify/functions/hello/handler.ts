import type { Handler } from "aws-lambda";
import type { Schema } from "../../data/resource";
type handlerType = Schema['sayHello']['functionHandler'];

export const handler: handlerType = async (event, context) => {
  console.log(event);
  console.log(context);
  console.log(event.arguments);
  const { name } = event.arguments;
  return `Hello, ${name}!`;
};