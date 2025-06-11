import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { sayHello } from "../functions/hello/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// a is amplify's schema definition
// sayHello is the name of both the function and the graphql query endpoint
// a.query() creates a graphql query endpoint.  it has .arguments for inputs and .returns for outputs
// .handler connects the query to the function that will handler the rquest.
const schema = a.schema({
  sayHello: a.query()
  .arguments({name: a.string()})
    .returns(a.string())
    .handler(a.handler.function(sayHello))
    .authorization((allow) => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

 