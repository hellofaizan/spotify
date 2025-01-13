import * as z from "zod";

export const linkSchema = z.object({
  link: z.string().url(),
});
