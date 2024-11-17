import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('Archivo drizzle.config.ts: No se ha definido la variable de entorno DATABASE_URL');


export default defineConfig({
	out: './drizzle',
	schema: './src/lib/server/db/schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_AUTH_TOKEN
	},
  casing: 'snake_case',
	verbose: true,
	strict: true,
});