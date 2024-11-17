# Título del Proyecto: "Sistema de Autenticación de Usuarios con SvelteKit"

Descripción General:
Es un proyecto de autenticación de usuarios desarrollado con Svelte y SvelteKit, que implementa un sistema seguro de inicio de sesión utilizando hooks, cookies y tokens de autenticación. El sistema verifica la autenticación del usuario en cada petición mediante cookies, y gestiona el primer acceso de usuarios pre-registrados que deben establecer su contraseña inicial.


# Parte1

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
📂 svelte-auth
├ 📂src
│ ├ 📂lib
│ │ ├ 📂server
│ │ │ └ [archivos usados estrictamente del lado del serviodor]
│ │ └ [otros archivos que se comparten entre cliente y servidor]
│ ├ 📂routes
│ │ └ [aquí van tus rutas de tu proyecto]
│ ├ app.html
│ ├ error.html
│ └ hooks.server.ts
├ 📂static
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
Creado el archivo anterior, vamos a instalar las dependencias necesarias para que drizzle pueda conectarse a la base de datos, también **bcript** para encriptar los password de usuario y **dotenv** para las variables de entorno y **zod** para validar las entradas de datos desde los formularios. Para eso ejecutamos los siguientes comandos en nuestra terminal:

```bash
bun add drizzle-orm @libsql/client bcrypt dotenv zod
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
## Conectemos drizzle a nuestra base de datos.

Para ello vamos a crear un archivo nuevo en la carpeta `src/lib/server/db/` cuyo nombre será `index.ts`
 ```markdown
├ 📂 src
│  └ 📂 lib
│   └ 📂 server
│     └ 📂 db
│       ├ 📜 relations.ts
│       ├ 📜 schema.ts
│       └ 📜 index.ts
└ …
```
El archivo tendrá el siguiente contenido:

`index.ts`
```typescript
import 'dotenv/config';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';


if (!process.env.DATABASE_URL)
  throw new Error('Archivo index.ts: No se ha definido la variable de entorno DATABASE_URL');

if (!process.env.DATABASE_AUTH_TOKEN)
  throw new Error('Archivo index.ts: No se ha definido la variable de entorno DATABASE_AUTH_TOKEN');

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

export const db = drizzle({ client, casing: 'snake_case' });
```

# Parte 3

La teoría de esta parte la pueden encontrar en la [documentación de svelte](https://svelte.dev/docs/kit/form-actions)

Para que un usuario pueda ingresar a nuestra aplicación, deberemos gestionar este ingreso através de un formulario de login. Para ello vamos a crear un formulario de login en una ruta que recibirá el nombre de `login` y el formulario lo escribiremos en su respectivo archivo `+page.svelte`:

 ```markdown
├ 📂 src
│  └ 📂 routes
│   ├ 📂 login
│   │  └ 📜 +page.svelte (-aqui-)
│   └ 📜 +page.svelte
└ …
```
Y este es el código que contendrá:

```TypeScript
<script lang="ts">

	let { form } = $props();

</script>

<div class="grid mx-3">
	<form action="?/login" method="POST">
		<h1>Ingreso</h1>

		<div>
			<label for="email">Escribe tu email</label>
			<input id="email" name="email" type="text"  required />
		</div>

		<div>
			<label for="password">Escribe tu Password</label>
			<input id="password" name="password" type="password" required />
		</div>

		{#if form?.mensaje }
			<p class="error">{form.mensaje}</p>
		{/if}

		{#if form?.credentials}
			<p class="error">Usuario o contraseña invalido</p>
		{/if}

		<button type="submit">Register</button>

	</form>
</div>
```
Recordemos que un archivo +page.server.ts puede exportar acciones, las cuales permiten recibir información para su debida gestion desde un formulario que use un método **post**.

Por lo anterior en la etiqueta form estamos declarando los siguientes atributos

```
<form action="?/login" method="POST">
```

  * **action="?/login"**: Quiere decir que los datos que se envíen desde el formulario serán recibidos por ***la acción llamada login***, la cual estará en la misma ruta `login` que acabamos de crear, en su correspondiente archivo +page.server.ts.

  * **method="post**: El atributo method en una etiqueta <form> de HTML especifica el método HTTP que se utilizará para enviar los datos del formulario al servidor, en este caso estamos usando "post"

    **Recuerda que:** Un método HTTP (o verbo HTTP) es un tipo de petición que un cliente (como un navegador web) puede hacer a un servidor. Es una parte fundamental del protocolo HTTP (Hypertext Transfer Protocol) que define la acción que se desea realizar sobre un recurso específico.

Vamos a comprobar si el usuario ya existe en la tabla de la base de datos y comparar si las contraseñas coinciden. Vamos a generar un nuevo token de autenticación cada vez que este se autentique y redirija al usuario.

SvelteKit proporciona una API para interactuar con cookies, por lo que no tenemos que importar ninguna libreria adicional.

En caso de que el usuario no tenga contraseña definida, lo redireccionaremos a otra ruta donde podrá crear una nueva.

`+page.server.ts`

```TypeScript
import { credentials } from '$lib/types/appTypes';

import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

import { db } from '$lib/server/db/index';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';


export const actions = {
    login: async ({ request, cookies }) => {

        // Parseamos los datos del formulario
        const data = Object.fromEntries(await request.formData());

        // Validamos los datos del formulario usando credentials
        const validate = credentials.safeParse(data);

        //Si los datos no son válidos, retornamos un error
        if (!validate.success) {
            return fail(400, { mensaje: validate.error.errors[0].message });
        }

        //Buscamos el usuario en la base de datos
        const user = await db
            .select()
            .from(users)
            .where(eq(users.email, String(data.email)));

        //Hacemos la validación de que el usuario exista
        if (!user || user.length === 0) {
            return fail(400, { credentials: true });
        }

        //Validamos que no haya más de un usuario con el mismo correo
        if (user.length > 1) {
            return fail(400, { duplicate: true });
        }

        //Validamos que el usuario haya completado el registro con la contraseña
        if (user[0].passwordHash === null) redirect(302, '/registro');

        //Validamos que la contraseña sea correcta
        const findpass = await bcrypt.compare(String(data.password), user[0].passwordHash);

        if (!findpass) {
            return fail(400, { credentials: true });
        }

        //Generamos un token de autenticación
        const authenticatedUser = crypto.randomUUID();

        //Actualizamos el token de autenticación
        await db
            .update(users)
            .set({ authToken: authenticatedUser })
            .where(eq(users.email, String(data.email)));

        // Seteamos la cookie con el token de autenticación
        cookies.set('session', authenticatedUser, {
            // enviara la cookie en cada request
            path: '/',
            // vencimiento en 30 días
            maxAge: 60 * 60 * 24 * 30
        });

        //Redirigimos al usuario a la página principal
        redirect(302, '/');
    }
}
```

En el código importamos credentials que es una variable que contiene un schema de zod, el cual nos permite validar los datos del formulario. También importamos bcrypt para comparar la contraseña que el usuario ingresó con la contraseña almacenada en la base de datos. También usamos el método `crypto.randomUUID()` para generar un token de autenticación. Este método genera un UUID (Universally Unique Identifier) aleatorio.

Credentials la importamos del archivo `appTypes.ts` que se encuentra en la carpeta `lib/types` y contiene el siguiente código:

```TypeScript
import {z} from 'zod'

export const credentials = z.object({
  email: z.string({required_error:"Se requiere email"}).email({message:"Email:no es un correo válido"}).trim(),
  password: z.string().min(8,{message:"Password: Mìnimo 8 caracteres"}).max(100)
})

export type Credentials = z.infer<typeof credentials>

```
Puedes consultar información sobre zod en:
  - La [documentación oficial](https://zod.dev/)
  - [Este excelente tutorial es español](https://www.youtube.com/watch?v=sQZPIMufppE&t=3191s)

Puedes consultar información sobre bcrypt aquí:
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [Este tutorial en español](https://www.youtube.com/shorts/Z5l5LeYmxnw)
  - [También en este otro](https://www.youtube.com/watch?v=SMS_BN9IyO0)
