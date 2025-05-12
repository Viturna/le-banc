ALTER TABLE "profile" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "quote" text;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "domains" text[];--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "roles" text[];--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "locations" text[];--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "experiences" text[];--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "coordinates" text;--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_username_unique" UNIQUE("username");