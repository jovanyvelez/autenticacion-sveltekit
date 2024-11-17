
import { credentials } from '$lib/types/appTypes';

import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

import { db } from '$lib/server/db/index';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';



export const actions = {

    register: async ({ request, cookies }) => {

        // Parseamos los datos del formulario
        const data = Object.fromEntries(await request.formData())

        // Validamos los datos del formulario usando credentials
        const validate = credentials.safeParse(data);

        //Si los datos no son válidos, retornamos un error
        if (!validate.success) {
            return fail(400, { mensaje: validate.error.errors[0].message });
        }

        //Validamos que las contraseñas coincidan
        if (String(data.password) !== String(data.password1)) return fail(400, { mensaje: 'Las contraseñas no coinciden' })

        //Buscamos el usuario en la base de datos
        const user = await db.select().from(users).where(eq(users.email, String(data.email)))

        //Validamos que no haya más de un usuario con el mismo correo
        if (user.length !== 1) return fail(400, { user: "Upss, tuvimos problemas:Intenta de nuevo" })

        //Generamos un token de autenticación
        const authenticatedUser = crypto.randomUUID();

        // Guardamos la cookie de sesión
        cookies.set('session', authenticatedUser, {
            // enviara la cookie en cada request
            path: '/',
            // vencimiento en 30 días
            maxAge: 60 * 60 * 24 * 30
        });

        //Actualizamos el usuario en la base de datos
        await db.update(users).set({
            passwordHash: await bcrypt.hash(String(data.password), 10),
            authToken: authenticatedUser,
        }).where(eq(users.email, String(data.email)))

        // Redirigimos al usuario a la página principal
        redirect(303, '/')
    }
}