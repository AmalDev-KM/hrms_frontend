import {z} from "zod";

export const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type SignInType = z.infer<typeof SignInSchema>;

export const initialvbalues: SignInType = {
  email: "",
  password: "",
};