import React, { useEffect } from 'react';

import { LoginLayout } from '@/layouts/Login';
import { RegisterForm } from './form';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function RegisterPage() {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.push('/account/users');
  }
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
}
