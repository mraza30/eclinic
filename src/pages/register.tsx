import { IRegisterSchema, registerSchema } from "@/zod/registerSchema";
import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Link from "next/link";
import LoginLayout from "@/components/layouts/Login";
import { NextPageWithLayout } from "./_app";
import UserLayout from "@/components/layouts/User";
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<IRegisterSchema> = (data) => console.log(data);

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
              "rounded-md border p-2 outline-none",
              !errors.fullName ? "border-gray-300" : "border-red-500"
            )}
            type="text"
            {...register("fullName")}
          />
          <p className="text-xs text-red-500">{errors.fullName?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            className={clsx(
              "rounded-md border p-2 outline-none",
              !errors.email ? "border-gray-300" : "border-red-500"
            )}
            type="email"
            {...register("email")}
          />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Phone</label>
          <input
            className={clsx(
              "rounded-md border p-2 outline-none",
              !errors.phone ? "border-gray-300" : "border-red-500"
            )}
            type="tel"
            {...register("phone")}
          />
          <p className="text-xs text-red-500">{errors.phone?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            className={clsx(
              "rounded-md border p-2 outline-none",
              !errors.password ? "border-gray-300" : "border-red-500"
            )}
            type="password"
            {...register("password")}
          />
          <p className="text-xs text-red-500">{errors.password?.message}</p>
        </div>

        <button
          className="mt-4 rounded-md bg-neutral-900 p-2 text-white"
          type="submit"
        >
          Submit
        </button>

        <Link href="/login" className="mt-4 text-center text-sm ">
          Already have an account? <span className="text-sky-600">Log in</span>
        </Link>
      </form>
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout>
      <LoginLayout>{page}</LoginLayout>
    </UserLayout>
  );
};

export default RegisterPage;
