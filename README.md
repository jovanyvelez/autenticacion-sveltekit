# Proyecto Para Autenticiación de Usuarios usando Svelte y SvelteKit

# Que necesitamos?

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

![Crear proyecto](https://res.cloudinary.com/ddytbuwpm/image/upload/v1731789646/Captura_desde_2024-11-16_15-40-20_jhnb3v.png)

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

Hemos creado nuestro proyecto

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

También encontrarás archivos comunes como .gitignore y .npmrc (y .prettierrc y eslint.config.js y así sucesivamente, si elige esas opciones al ejecutar buns sv create svelte_auth).

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
