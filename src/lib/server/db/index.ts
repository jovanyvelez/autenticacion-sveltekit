
import 'dotenv/config';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';


if (!process.env.DATABASE_URL) throw new Error('Archivo drizzle.con.ts: No se ha definido la variable de entorno DATABASE_URL');
if (!process.env.DATABASE_AUTH_TOKEN) throw new Error('Archivo drizzle.config.ts: No se ha definido la variable de entorno DATABASE_AUTH_TOKEN');

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

export const db = drizzle({ client, casing: 'snake_case' });