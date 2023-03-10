import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/react';

/**
 * Available when logged in
 * Show hover on User Icon on header
 */
export function UserHeader() {
  const { data } = useSession();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <div className="absolute right-0 w-60 rounded-lg bg-white py-5 px-4 shadow-xl">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-1 overflow-hidden px-1">
            <span className="h-10 w-10 rounded-full bg-slate-100 px-3 py-2">
              {data?.user?.image ? (
                <Image alt="avatar-image" src={data.user.image} />
              ) : (
                <></>
              )}
            </span>

            <span
              dir="rtl"
              className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium"
            >
              {data?.user?.email}
            </span>
          </li>

          {/* Divider */}
          <span className="inline-block w-full border border-neutral-200" />

          {/* Divider */}
          <span className="inline-block w-full border border-neutral-200" />

          <li className="flex items-center gap-4">
            <></>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}
