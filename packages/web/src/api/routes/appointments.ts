import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import { appointmentRequests } from "../database/schema";
import { guard, requestFields } from "../lib/request-validation";

export const appointments = {
  create: base
    .input(
      z.object({
        ...requestFields,
        requestedDate: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/)
          .refine(
            (v) => !Number.isNaN(Date.parse(v)) && v > new Date().toISOString().slice(0, 10),
            "Choisissez une date à partir de demain.",
          ),
        requestedTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
        timezone: z
          .string()
          .max(100)
          .refine((v) => {
            try {
              new Intl.DateTimeFormat("fr", { timeZone: v });
              return true;
            } catch {
              return false;
            }
          }),
      }),
    )
    .handler(async ({ input }) => {
      guard(input.email);
      const id = `RDV-${crypto.randomUUID()}`;
      const now = new Date().toISOString();
      await db
        .insert(appointmentRequests)
        .values({
          id,
          name: input.name,
          email: input.email,
          company: input.company,
          subject: input.subject,
          message: input.message,
          requestedDate: input.requestedDate,
          requestedTime: input.requestedTime,
          timezone: input.timezone,
          createdAt: now,
          consentAt: now,
        });
      return { reference: id };
    }),
};
