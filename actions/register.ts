'use server';

import * as z from 'zod';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcrypt';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already exists!' };
  }

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  //TODO: sent verification token email

  return { success: 'Email sent!' };
};
