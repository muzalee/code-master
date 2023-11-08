import fs from 'fs';
import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
});

interface QueryParams {
  query: string;
  values: any[];
 }
 
 export default async function executeQuery({ query, values }: QueryParams) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    const typedError = error as Error;
    fs.appendFileSync('error.log', `${new Date().toISOString()}: ${typedError.message}\n`);
   return { error: typedError };
  }
 }