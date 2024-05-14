import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email required!',
  }),
  password: z.string().min(1, {
    message: 'Password required!',
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: 'Email required!',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required!',
  }),
});

export const resetSchema = z.object({
  email: z.string().email({
    message: 'Email required!',
  }),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
});
