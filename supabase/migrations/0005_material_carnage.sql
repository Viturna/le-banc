CREATE TABLE "domain" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "domain_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "profile_to_domain" (
	"profile_id" uuid NOT NULL,
	"domain_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profile_to_domain" ADD CONSTRAINT "profile_to_domain_profile_id_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profile"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profile_to_domain" ADD CONSTRAINT "profile_to_domain_domain_id_domain_id_fk" FOREIGN KEY ("domain_id") REFERENCES "public"."domain"("id") ON DELETE no action ON UPDATE no action;