CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`email` text NOT NULL,
	`organization` text NOT NULL,
	`brief` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `leads_email_created` ON `leads` (`email`,`created_at`);