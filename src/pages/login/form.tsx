import { type LoginSchema, loginSchema } from '@/zod/loginSchema';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
    });
    console.log(res);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-72 flex-col gap-1 md:w-80 lg:md:w-96"
      >
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
          className="mt-4 rounded-md bg-neutral-900 p-2 text-white"
          type="submit"
        >
          Submit
        </button>

        <Link href="/register" className="mt-4 text-center text-sm ">
          Don't have an account? <span className="text-sky-600">Sign up</span>
        </Link>
      </form>
    </>
  );
}
