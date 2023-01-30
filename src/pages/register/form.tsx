import { type RegisterSchema, registerSchema } from '@/zod/registerSchema';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import React from 'react';
import { api } from '@/utils/api';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';

export function RegisterForm() {
  const { mutateAsync } = api.user.newUser.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-72 flex-col gap-1 md:w-80 lg:md:w-96"
      >
        <div className="flex flex-col">
          <label>Full Name</label>
          <input
            className={clsx(
              'rounded-md border p-2 outline-none',
              !errors.name ? 'border-gray-300' : 'border-red-500'
            )}
            type="text"
            {...register('name')}
          />
          <p className="text-xs text-red-500">{errors.name?.message}</p>
        </div>

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
          <label>Phone</label>
          <input
            className={clsx(
              'rounded-md border p-2 outline-none',
              !errors.phone ? 'border-gray-300' : 'border-red-500'
            )}
            type="tel"
            {...register('phone')}
          />
          <p className="text-xs text-red-500">{errors.phone?.message}</p>
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

        <select
          {...register('role')}
          defaultValue="PATIENT"
          className="mt-3 rounded-md border border-gray-300 p-2 outline-none"
        >
          <option value="PATIENT">User</option>
          <option value="DOCTOR">Doctor</option>
        </select>

        <button
          className="mt-4 rounded-md bg-neutral-900 p-2 text-white"
          type="submit"
        >
          Submit
        </button>

        <Link href="/login" className="mt-4 text-center text-sm">
          Already have an account? <span className="text-sky-600">Log in</span>
        </Link>
      </form>
    </>
  );
}
