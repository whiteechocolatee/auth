import { db } from '@/lib/db';

export const getVerificationTokenByEmail = async (
  token: string,
) => {
  try {
      const verificationToken = await db.verificationToken.findUnique({
        
      })
  } catch (error) {
    return null;
  }
};
