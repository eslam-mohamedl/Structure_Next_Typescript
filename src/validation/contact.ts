import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Invalid phone number").max(11, "Invalid phone number"),
  comments: z.string().min(10, "Message is too short"),
});

export type IContactForm = z.infer<typeof contactSchema>;
