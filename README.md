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

En la consola de comandos, verifica que estás ubicada/o en la carpeta donde deseas crear el proyecto, recueda que como requisito adicional debes tener instalado node o bun que son compiladores de javascript. Luego ejecuta el siguiente comando:

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
