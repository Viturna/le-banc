import { db } from "$lib/db";
import { profileTable } from "$lib/db/schema";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const getOrCreateUserProfile = async (locals: App.Locals) => {
  const { user } = await locals.safeGetSession();

  if (!user) {
    throw error(401, "Not authenticated");
  }

  const curProfile = await db.query.profileTable.findFirst({
    where: eq(profileTable.id, user.id),
  });

  if (curProfile) {
    return curProfile;
  }

  await db.insert(profileTable).values({
    id: user.id,
    firstName: "",
    lastName: "",
    email: user.email ?? "",
    username: "",
    quote: "",
    locations: [],
    experiences: [],
    phone: "",
    coordinates: "",
  });

  const newProfile = await db.query.profileTable.findFirst({
    where: eq(profileTable.id, user.id),
  });

  if (!newProfile) {
    throw error(500, "Failed to create user profile");
  }

  return newProfile;
};

export const getUserProfileByUsername = async (username: string) => {
  const profile = await db.query.profileTable.findFirst({
    where: eq(profileTable.username, username),
  });

  if (!profile) {
    throw error(404, "User profile not found");
  }

  return profile;
};