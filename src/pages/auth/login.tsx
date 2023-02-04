import { type LoginSchema, loginSchema } from '@/zod/login';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import React, { useState } from 'react';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { AuthLayout } from '@/layouts/Auth';
import { FaExclamation } from 'react-icons/fa';

export default function LoginPage() {
  const [{ isCredentialsValid, isLoading }, setLoginStates] = useState({
    isCredentialsValid: true,
    isLoading: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setLoginStates((prev) => ({ ...prev, isLoading: true }));

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (response?.error === 'CredentialsSignin') {
      reset();
      setLoginStates({ isCredentialsValid: false, isLoading: false });
    }
  };

  return (
    <AuthLayout>
      <form
        className="flex w-72 flex-col gap-1 md:w-80 lg:md:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isCredentialsValid && (
          <div className="mb-4 flex self-center text-red-500">
            <FaExclamation />
            Invalid Credentials
          </div>
        )}

        <div className="flex flex-col">
          <label>Email</label>
          <input
            className={clsx(
              'rounded-md border p-2 outline-none',
              !errors.email ? 'border-gray-300' : 'border-red-500'
            )}
            type="email"
            {...register('email')}
          />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            className={clsx(
              'rounded-md border p-2 outline-none',
              !errors.password ? 'border-gray-300' : 'border-red-500'
            )}
            type="password"
            {...register('password')}
          />
          <p className="text-xs text-red-500">{errors.password?.message}</p>
        </div>

        <button
          className="mt-4 h-10 rounded-md bg-sky-400 p-2 text-white"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.span
              className="inline-block h-5 w-5 rounded-full border-r-4 border-t-4 border-white"
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
            />
          ) : (
            'Submit'
          )}
        </button>

        <Link href="/auth/register" className="mt-4 text-center text-sm ">
          Don't have an account? <span className="text-sky-500">Sign up</span>
        </Link>
      </form>
    </AuthLayout>
  );
}
