import { DATABASE_URL, DATABASE_AUTH_TOKEN } from '$env/static/private';


import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';


if (!DATABASE_URL) throw new Error('Problemas en el archivo de conexión a la base de datos lib/server/db/index.ts, primer if');



const client = createClient({ 
    url: DATABASE_URL, 
    authToken: DATABASE_AUTH_TOKEN
  });
  
  export const db = drizzle({ client, casing: 'snake_case' });