import { useEffect, useState } from "react";
import {Auth} from './Auth1';
import {Amplify} from 'aws-amplify';
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);


import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
async function sayHello() {
  const result = await client.queries.sayHello({ name: 'User' });
  console.log(result);
}

function App() {
   
  return (
    <>
    <Auth></Auth>
    </>
  );
}
export default App;

