import { db } from '$lib/server/db/index';
import { users } from '$lib/server/db/schema';

export const load = async () => {
    const usuarios = await db.select().from(users);
    return { usuarios };
}