import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const settingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.USER, UserRole.ADMIN]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password are required',
      path: ['newPassword'],
    },
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'Password are required',
      path: ['password'],
    },
  );

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email required!',
  }),
  password: z.string().min(1, {
    message: 'Password required!',
  }),
  code: z.optional(z.string()),
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
