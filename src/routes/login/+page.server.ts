
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