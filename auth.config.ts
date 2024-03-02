import { getUserByEmail } from '@/data/user';
import { LoginSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
