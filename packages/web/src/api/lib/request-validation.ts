import { z } from "zod";
import { ORPCError } from "@orpc/server";

export const requestFields = {
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  company: z.string().trim().max(160).default(""),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(0).default(""),
};
const attempts = new Map<string, number[]>();
export function guard(email: string) {
  const now = Date.now();
  for (const [key, values] of attempts)
    if (!values.some((v) => now - v < 600_000)) attempts.delete(key);
  const values = (attempts.get(email.toLowerCase()) ?? []).filter((v) => now - v < 600_000);
  if (values.length >= 4)
    throw new ORPCError("TOO_MANY_REQUESTS", {
      message: "Trop de demandes. Réessayez dans dix minutes.",
    });
  attempts.set(email.toLowerCase(), [...values, now]);
}
