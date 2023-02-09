import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserRegisterSchema, userRegisterSchema } from '@/zod/userRegister';

import { AuthLayout } from '@/layouts/Auth';
import Link from 'next/link';
import { MyButton } from '@/components/styled/MyButton';
import { MyForm } from '@/components/styled/MyForm';
import { MyInput } from '@/components/styled/MyInput';
import MyPhoneInput from '@/components/styled/MyPhoneInput';
import React from 'react';
import { api } from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod';

export default function RegisterPage() {
  const { isLoading, mutateAsync } = api.user.addNewUser.useMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<UserRegisterSchema>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      role: 'PATIENT',
    },
  });

  const onSubmit: SubmitHandler<UserRegisterSchema> = async (data) => {
    console.log(data);
    // const { error } = await mutateAsync(data);
    // error && setError('phone', { message: error });
  };
  return (
    <>
      <AuthLayout>
        <MyForm title="Create Account" onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            label="Full Name"
            type="text"
            name="name"
            register={register}
            errors={errors}
          />
          <MyPhoneInput
            register={register}
            errors={errors}
            setValue={setValue}
          />
          <MyInput
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
          />
          <div className="my-1 flex items-center gap-4 text-sm">
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
                <BsCheckCircle className="text-2xl text-sky-400" />
              )}
            </div>
            Join as Doctor
          </div>
          <MyButton isLoading={isLoading}>Submit</MyButton>
          <Link
            href="/auth/login"
            className="mt-4 text-center text-sm font-medium text-gray-500"
          >
            Already have an account?{' '}
            <span className="text-sky-500">Log in</span>
          </Link>
        </MyForm>
      </AuthLayout>
    </>
  );
}
