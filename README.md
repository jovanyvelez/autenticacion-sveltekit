# Proyecto Para Autenticiación de Usuarios usando Svelte y SvelteKit

# --Primera 1--

## Que necesitamos?

Tener instalados en tu equipo los siguientes programas:
  * git.
  * uno del los siguientes compiladores de javascript: npm, pnpm o bun.
  * Un editor de código, como Visual Studio, zed, vim, etc.

Si no los tienes instalados, puedes buscar en Google como hacerlo. Para este proyecto usaré bun como compilador y zed como editor de código.

Es imporpotantísimo tener un conocimiento básico de la consola de comandos. Si no sabes como abrir la consola de comandos en tu sistema operativo y en general de su uso, puedes buscar en Google como hacerlo, ten en cuenta que en windows existen varias consolas `cmd` o `PowerShell`. Está última comparte comandos comunes con la consola `bash` de linux. Te dejo algunos enlaces para que mires este importante tema:

- [`Básico de cómo usar la consola de Windows`](https://www.youtube.com/watch?v=W6434nulBu8)
- [`Comandos de PowerShell y consola de Linux que debes conocer`](https://www.dreamhost.com/blog/es/comandos-linux-que-debes-conocer/)

## Creamos un nuevo proyecto.

En la consola de comandos, verifica que estás ubicada/o en la carpeta donde deseas crear el proyecto. Vamos a ello y ejecutamos el siguiente comando:

```bash
# creamos y proyecto nuevo llamado svelte-auth
# si usas npm `npx sv create svelte-auth`
# si usas npm `npx sv create svelte-auth`
bunx sv create svelte-auth
```

![Crear proyecto](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731795158/Captura_desde_2024-11-16_17-12-30_nxikxe.png)

**Ejecutado este comando se nos pedirá la plantilla que queremos usar y seleccionaremos SvelteKit minimal y continuamo presionando la tecla enter.**

![Seleccionar plantilla](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731790097/Captura_desde_2024-11-16_15-47-32_tcdyv7.png)

**Se nos pide si queremos usar Typescript o Javascript y seleccionamos Typescript y continuamos con enter**

![Lenguaje a usar](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731790747/Captura_desde_2024-11-16_15-58-50_nzjfrz.png)

**Luego seleccionamos prettier con la barra espaciadora y nos deplazamos con la tecla de flecha abajo de nuestro teclado hasta llegar a eslint, la cual vamos a seleccionar también con la barra espacidadora, luego presionamos enter para continuar**

Las librerías Prettier y ESLint son herramientas populares en el desarrollo de software, especialmente en el ecosistema de JavaScript y TypeScript.

  * >**Prettier**: Es un formateador de código que asegura que todo el código en un proyecto siga un estilo consistente. Prettier analiza el código y lo reescribe con un formato consistente, eliminando la necesidad de debates sobre el estilo de código en los equipos de desarrollo.

  * >**ESLint**: Es una herramienta de análisis estático de código que identifica patrones problemáticos en el código JavaScript/TypeScript. ESLint ayuda a encontrar y arreglar errores, aplicar convenciones de estilo y mejorar la calidad del código.

Ambas herramientas se pueden usar juntas para asegurar que el código sea limpio, consistente y libre de errores comunes.

  ![librerias a seleccionar](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731791315/Captura_desde_2024-11-16_16-08-18_gty9zm.png)


Finalmente seleccionamos el administrador de paquetes con el cual deseamos instalar las dependencias del proyecto y elegimos bun.

![Fin](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731792506/Captura_desde_2024-11-16_16-27-48_wspgbg.png)

Hemos creado nuestra estructura inicial del proyecto

## Estructura del proyecto

Un proyecto típico de SvelteKit se ve así:

```markdown
svelte-auth/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [archivos usados estrictamente del lado del serviodor]
│ │ └ [otros archivos que se comparten entre cliente y servidor]
│ ├ routes/
│ │ └ [aquí van tus rutas de tu proyecto]
│ ├ app.html
│ ├ error.html
│ ├ hooks.server.ts
├ static/
│ └ [recursos estáticos como imágenes, fuentes, etc.]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

También encontrarás archivos comunes como .gitignore y .npmrc (y .prettierrc y eslint.config.js y así sucesivamente, si elige esas opciones al ejecutar bunx sv create svelte_auth).

## Archivos del proyecto

El directorio `src` contiene lo esencial de tu proyecto. Todo excepto src/routes y src/app.html es opcional.

  * lib contiene el código de tu biblioteca (utilidades y componentes), que se pueden importar a través del alias `$lib`
    * server contiene el código de tus bibliotecas solo para el lado del servidor. Se pueden importar utilizando el alias `$lib/server`. SvelteKit te impedirá importarlos en código del lado del cliente.
  * routes contiene tus rutas. Cada archivo +page.svelte en este directorio se convierte en una ruta en tu aplicación. . También puede colocar otros componentes que solo se usan dentro de una sola ruta aquí.
  * app.html es la plantilla base de tu aplicación. Puede contener un encabezado, un pie de página y cualquier otra cosa que desee que aparezca en todas las páginas de su aplicación.
  * error.htmles la página que se representa cuando todo lo demás falla. Puede contener los siguientes marcadores de posición:
    * %sveltekit.status%— el estado HTTP
    * %sveltekit.error.message%— el mensaje de error
  * hooks.server.ts contiene los midlewares del lado del servidor que se ejecutan antes de cada solicitud. Se puede usar esto para autenticar al usuario, cargar datos de la base de datos, etc.


# Parte 2

##  Diseño de la base de datos y conexión

Llegados a este punto es necesario que refresques tus conocimientos de  SQLIte y de SQL. Para ello te recomiendo que revises de nuevo los temas y te familiarices con la creación de tablas, inserción de datos, consultas, etc.

Para ello te dejo un enlace a un curso gratuito de SQL en

- [youtube video 1](https://www.youtube.com/watch?v=LbGwSPGI-kI)
- [youtube video 2](https://www.youtube.com/watch?v=yLoh2sSDECw&t=42s)
- [Turso](https://turso.tech)
- [Drizzle](https://orm.drizzle.team)

## Creación de la base de datos

Vamos a crear una base de datos en la nube (-database as a service-) utilizando el capa gratuita de TURSO con una tabla llamada `users` que tendrá los siguientes campos:

- id: Integer
- email: Text
- password_hash: Text
- created_at: Text
- updated_at: Text
- auth_token: Text

Para ello vamos a seguir los siguientes pasos:

1. Crear una cuenta en [Turso](https://turso.tech)
2. Crear una base de datos
3. Crear una tabla llamada `users` con los campos mencionados anteriormente y con el siguiente código SQL

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  email TEXT NOT NULL,
  password_hash TEXT,
  auth_token TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
```

Insertamos valores de ejemplo directamente en la base de datos con valores iniciales:

```sql
INSERT INTO users (nombre, apellido, email) VALUES
('Juan', 'Pérez', 'juan.perez@example.com'),
('María', 'González', 'maria.gonzalez@example.com'),
('Carlos', 'López', 'carlos.lopez@example.com'),
('Ana', 'Martínez', 'ana.martinez@example.com'),
('Luis', 'Rodríguez', 'luis.rodriguez@example.com'),
('Laura', 'Hernández', 'laura.hernandez@example.com'),
('José', 'García', 'jose.garcia@example.com'),
('Elena', 'Sánchez', 'elena.sanchez@example.com'),
('Miguel', 'Ramírez', 'miguel.ramirez@example.com'),
('Lucía', 'Torres', 'lucia.torres@example.com');
```

![Tabla con los datos](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731800581/Captura_desde_2024-11-16_18-42-43_vzfogd.png)

### Configuramos drizzle para que se conecte a nuestra base de datos en TURSO

Para ello vamos a crear un archivo .env en la raíz del proyecto con los parámetros de conexión a la base de datos.

```bash
DATABASE_URL="Aqui escribes el url que te dá turso para la base de datos"
DATABASE_TOKEN="Aqui escribes el token que te dá turso para la base de datos"
```
Creado el archivo anterior, vamos a instalar las dependencias necesarias para que drizzle pueda conectarse a la base de datos, también vamos crear bcript para encriptar los password de usuario mas adelante. Para eso ejecutamos los siguientes comandos en nuestra terminal:

```bash
bun add drizzle-orm @libsql/client bcrypt
bun add -D drizzle-kit @types/bcript
```
![instalar paquetes](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731801425/Captura_desde_2024-11-16_18-56-49_ezs2af.png)

### Creamos el archivo drizzle.config.ts
Este archivo lo debemos crear en la raíz del proyecto y es el encargado de configurar la conexión a la base de datos, pues contiene toda la información sobre esta y los archivos de eschema.

    > "En Drizzle, los archivos de esquemas (schemas) son archivos que definen la estructura de tu base de datos. Estos archivos especifican las tablas, columnas, tipos de datos y relaciones entre las tablas en tu base de datos.

    Los esquemas son esenciales para que DRIZZLE pueda entender cómo está organizada tu base de datos y cómo debe manejar las migraciones y las conexiones. Los archivos de esquemas permiten a Drizzle generar y aplicar migraciones de manera consistente y segura, asegurando que la estructura de la base de datos esté siempre en sincronía con el código de tu aplicación.

    Por lo general, estos archivos están escritos en TypeScript o JavaScript y siguen una sintaxis específica que Drizzle puede interpretar."


Creemos entonces un archivo llamado drizzle.config.ts en la raíz del proyecto con el siguiente contenido.

```typescript
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './src/server/lib/db/schema.ts',
  dialect: 'turso',
  casing: 'snake_case'
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.DATABASE_TOKEN,
  },
});
```

Drizzle Kit proporciona un comando CLI para introspeccionar su base de datos y generar un archivo de esquema con migraciones. El archivo de esquema contiene toda la información sobre las tablas, columnas, relaciones e índices de nuestra base de datos. Nosotros para este caso solo tenemos una tabla denominada `users` y sobre esa nos traerá el esquema. Para ello en la terminal usamos el comamdo:

```bash
bunx drizzle-kit pull
```

El anterior comando nos dará el resultado de la intropección de la base de datos en un archivo nuevo que se creó `schema.ts`, una carpeta `meta` con instantáneas del esquema de tu base de datos, un archivo SQL con la migración y un archivo `relations.ts` para [consultas relacionales](https://orm.drizzle.team/docs/rqb).

Todo ello quedará en el directorio raíz del proyecto dentro de la carpeta `drizzle` que fué el que indicamos en el archivo **"drizzle-config.ts"**

en nuestro caso el archivo schema.ts sería el siguiente:

```typescript
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
	id: integer().primaryKey({ autoIncrement: true }),
	nombre: text().notNull(),
	apellido: text().notNull(),
	email: text().notNull(),
	passwordHash: text("password_hash"),
	authToken: text("auth_token"),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text("updated_at"),
});

```

## Copiar el código de la carpeta drizzle a su destino final
Se recomienda copiar los archivos drizzle/schema.ts y drizzle/relations.ts a la carpeta donde se almacenarán definitivamente en el proyecto. En este caso los vamos a dejar en src/server/db/. 
 ```markdown
    ├ 📂 drizzle
    │ ├ 📂 meta
    │ ├ 📜 migration.sql
    │ ├ 📜 relations.ts ─────────┐
    │ └ 📜 schema.ts ────────────┤ 
    ├ 📂 src                     │
    │  └ 📂 db                   │
    │   └ 📂 server              │
    │     └ 📂 db                │
    │       ├ 📜 relations.ts <──│
    │       └ 📜 schema.ts <─────┘
    └ …
 ```
