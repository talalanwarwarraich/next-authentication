'use server';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name } = validatedFields.data;
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
