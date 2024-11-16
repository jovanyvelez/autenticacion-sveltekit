# Proyecto Para Autenticiación de Usuarios usando Svelte y SvelteKit

# Que necesitamos?

Lo primero será tener un conocimiento básico de la consola de comandos. Si no sabes como abrir la consola de comandos en tu sistema operativo, puedes buscar en Google como hacerlo. Te dejo algunos enlaces para que mires este importante tema:

- [`Básico de cómo usar la consola de Windows`](https://www.youtube.com/watch?v=W6434nulBu8)
- [`Abrir la consola de comandos en Linux`](https://www.redeszone.net/tutoriales/sistemas-operativos/como-abrir-consola-comandos-linux/)
- [`Abrir la consola de comandos en Windows`](https://www.profesionalreview.com/2019/01/06/como-abrir-la-consola-de-comandos-en-windows-10/)


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

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
