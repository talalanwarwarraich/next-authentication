import { db } from '@/lib/db';

export const getUserByEmail = (email: string) => {
  try {
    return db.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    return null;
  }
};

export const getUserById = (id: string) => {
  try {
    return db.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    return null;
  }
};
