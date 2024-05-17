'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // some server stuff before logout

  await signOut({
    redirect: true,
    redirectTo: '/auth/login',
  });
};
