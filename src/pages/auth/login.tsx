import { SubmitHandler, useForm } from 'react-hook-form';
import { UserLoginSchema, userLoginSchema } from '@/zod/userlogin';

import { AuthLayout } from '@/layouts/Auth';
import Link from 'next/link';
import { MyButton } from '@/components/styled/MyButton';
import { MyForm } from '@/components/styled/MyForm';
import { MyInput } from '@/components/styled/MyInput';
import MyPhoneInput from '@/components/styled/MyPhoneInput';
import React from 'react';
import phone from 'phone';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  });
  const onSubmit: SubmitHandler<UserLoginSchema> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <AuthLayout>
        <MyForm title="Welcome Back!" onSubmit={handleSubmit(onSubmit)}>
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
          <Link
            className="text-right text-sm text-sky-500"
            href="/reset-password"
          >
            Forgot Password?
          </Link>
          <MyButton>Submit</MyButton>

          <Link
            href="/auth/register"
            className="mt-4 text-center text-sm font-medium text-gray-500"
          >
            Don't have an account? <span className="text-sky-500">Sign up</span>
          </Link>
        </MyForm>
      </AuthLayout>
    </>
  );
}
