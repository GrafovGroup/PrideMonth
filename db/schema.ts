import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const leads=sqliteTable('leads',{id:text('id').primaryKey(),createdAt:integer('created_at').notNull(),email:text('email').notNull(),organization:text('organization').notNull(),brief:text('brief').notNull(),status:text('status').notNull().default('new')},t=>[index('leads_email_created').on(t.email,t.createdAt)]);
