import { DATABASE_URL, DATABASE_AUTH_TOKEN } from '$env/static/private';
import { dev } from '$app/environment';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

console.log('DATABASE_URL', DATABASE_URL);

if (!DATABASE_URL) throw new Error('Problemas en el archivo de conexión a la base de datos lib/server/db/index.ts, primer if');

if (!dev && !DATABASE_AUTH_TOKEN) throw new Error('Problemas en el archivo de conexión a la base de datos lib/server/db/index.ts, segundo if');

const client = createClient({ 
    url: DATABASE_URL, 
    authToken: DATABASE_AUTH_TOKEN
  });
  
  export const db = drizzle({ client, casing: 'snake_case' });