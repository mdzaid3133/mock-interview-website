import { pgTable, serial, varchar,  text, } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockRes: text('jsonMockRes').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobExprience: varchar('jobExprience').notNull(),
    createdBY: varchar('createdBY').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull(),
});
