import { type RegisterSchema, registerSchema } from '@/zod/register';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';
import { api } from '@/utils/api';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '@/layouts/Auth';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';

export default function RegisterPage() {
  const { mutateAsync, isLoading } = api.user.newUser.useMutation();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<RegisterSchema>({
    defaultValues: {
      role: 'PATIENT',
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    const response = await mutateAsync(data);
    response.error &&
      setError('email', {
        message: response.error,
      });
    response.status === 201 && signIn('credentials', { data });
  };

  return (
    <AuthLayout>
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

        <div className="mt-4 flex items-center gap-4">
          <div
            onClick={() => {
              watch('role') === 'PATIENT'
                ? setValue('role', 'DOCTOR')
                : setValue('role', 'PATIENT');
            }}
          >
            {watch('role') === 'PATIENT' ? (
              <BsCircle className="text-2xl text-sky-400" />
            ) : (
              <BsCheckCircle className="rounded-full bg-sky-400 text-2xl text-white" />
            )}
          </div>
          Join as Doctor
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

        <Link href="/auth/login" className="mt-4 text-center text-sm">
          Already have an account? <span className="text-sky-500">Log in</span>
        </Link>
      </form>
    </AuthLayout>
  );
}
