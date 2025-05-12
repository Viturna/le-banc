import { integer, pgTable, text, uuid, serial, timestamp, boolean } from "drizzle-orm/pg-core";

// Les profiles
export const profileTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text('password'),
  username: text("username").unique(),
  quote: text("quote"),
  locations: text("locations").array(),
  experiences: text("experiences").array(),
  phone: text("phone"),
  coordinates: text("coordinates"),
  photoUrl: text("photo_url").default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});


export const domainTable = pgTable("domain", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
});

export const profileToDomainTable = pgTable("profile_to_domain", {
    profileId: uuid("profile_id")
      .notNull()
      .references(() => profileTable.id),
    domainId: integer("domain_id")
      .notNull()
      .references(() => domainTable.id),
});
  
export const roleTable = pgTable("role", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
});

export const profileToRoleTable = pgTable("profile_to_role", {
    profileId: uuid("profile_id")
      .notNull()
      .references(() => profileTable.id),
    roleId: integer("role_id")
      .notNull()
      .references(() => roleTable.id),
});

// Les projets
export const projectTable = pgTable("project", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  images: text("images").array(),
  link: text("link"),
  isMembersFound: boolean("is_members_found").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectToDomainTable = pgTable("project_to_domain", {
  projectId: uuid("project_id")
    .notNull()
    .references(() => projectTable.id),
  domainId: integer("domain_id")
    .notNull()
    .references(() => domainTable.id),
});

export const projectToRoleNeededTable = pgTable("project_to_role_needed", {
  projectId: uuid("project_id")
    .notNull()
    .references(() => projectTable.id),
  roleId: integer("role_id")
    .notNull()
    .references(() => roleTable.id),
  quantity: integer("quantity").notNull(),
});

export const projectMemberTable = pgTable("project_member", {
  projectId: uuid("project_id")
    .notNull()
    .references(() => projectTable.id),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profileTable.id),
  roleId: integer("role_id")
    .notNull()
    .references(() => roleTable.id),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

  
