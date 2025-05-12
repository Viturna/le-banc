CREATE TABLE "profile_to_role" (
	"profile_id" uuid NOT NULL,
	"role_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "role" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "role_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "profile_to_role" ADD CONSTRAINT "profile_to_role_profile_id_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profile"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profile_to_role" ADD CONSTRAINT "profile_to_role_role_id_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."role"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN "domains";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN "roles";