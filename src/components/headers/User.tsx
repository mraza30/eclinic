import React, { useState } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export default function UserHeader() {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState<Boolean>();
  return (
    <>
      <nav className="fixed flex h-12 w-full items-center justify-between bg-neutral-800 px-4 font-inter">
        {/* Logo Div */}
        <div />

        <ul className="flex items-center gap-4">
          <li
            onClick={() => {
              setShowHeader(false);
              router.push('/auth/login');
            }}
            className="hidden cursor-pointer py-1 text-sm text-white md:block"
          >
            Login
          </li>

          <li
            onClick={() => {
              setShowHeader(false);
              router.push('/auth/register');
            }}
            className="cursor-pointer rounded-md border border-white py-1 px-2 text-sm text-white"
          >
            Register
          </li>

          <li className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-xl text-white"
              onClick={() => setShowHeader(true)}
            />
          </li>

          <span className="mx-1 hidden h-7 border-l-2 border-neutral-400 md:inline-block " />

          <li className="hidden md:block">
            <FontAwesomeIcon
              icon={faBell}
              className="cursor-pointer text-2xl text-white"
            />
          </li>

          <li className="hidden md:block">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="cursor-pointer text-2xl text-white"
            />
          </li>
        </ul>
      </nav>

      {showHeader ? (
        <>
          <nav className="absolute top-0 right-0 z-50 flex h-screen w-screen flex-col bg-neutral-800 px-4 pt-10">
            <FontAwesomeIcon
              icon={faClose}
              className="absolute top-4 right-4 text-2xl text-white"
              onClick={() => setShowHeader(false)}
            />
            <ul className="flex gap-3">
              <li
                onClick={() => {
                  setShowHeader(false);
                  router.push('/auth/register');
                }}
                className="cursor-pointer rounded-md border border-white py-1 px-2 text-sm text-white"
              >
                Register
              </li>
              <li
                onClick={() => {
                  setShowHeader(false);
                  router.push('/auth/login');
                }}
                className="cursor-pointer py-1 text-sm text-white"
              >
                Login
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
}

function AbsoluteHeader() {}
