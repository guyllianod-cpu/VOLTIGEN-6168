import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import { contactRequests } from "../database/schema";
import { guard, requestFields } from "../lib/request-validation";

export const contact = {
  create: base.input(z.object(requestFields)).handler(async ({ input }) => {
    guard(input.email);
    const id = `VEG-${crypto.randomUUID()}`;
    const now = new Date().toISOString();
    await db.insert(contactRequests).values({
      id,
      name: input.name,
      email: input.email,
      company: input.company,
      subject: input.subject,
      message: input.message,
      createdAt: now,
      consentAt: now,
    });
    return { reference: id };
  }),
};
