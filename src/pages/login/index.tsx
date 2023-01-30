import { LoginForm } from './form';
import { LoginLayout } from '@/layouts/Login';
import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.push('/account/users');
  }
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}
