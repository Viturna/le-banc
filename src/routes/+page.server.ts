import { getOrCreateUserProfile } from "$lib/auth";
import { db } from "$lib/db";
import { profileTable } from "$lib/db/schema";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";

export const load = async ({ locals }) => {
	try {
		const userProfile = await getOrCreateUserProfile(locals);

		return {
			userProfile,
		};
	} catch (err) {
		console.error('❌ Error in load:', err);
		throw error(500, "Internal Server Error (profile)");
	}
};

export const actions = {
    default: async ({ request, locals }) => {
        const userProfile = await getOrCreateUserProfile(locals);

        if (!userProfile) {
            throw error(401, "User not authenticated");
         }
         
    const schema = zfd.formData({
        firstName: zfd.text(),
        lastName: zfd.text(),
        email: zfd.text(),
    });

    const { data } = schema.safeParse(await request.formData());

    if (!data) {
        throw error(400, "Invalid form data");
    }
    

    await db.update(profileTable).set({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
    }).where(eq(profileTable.id, userProfile.id));

    return { 
        success: true,
        message: "Profile updated successfully",
    };
    },
};