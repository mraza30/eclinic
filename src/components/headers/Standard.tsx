import React, { useEffect, useState } from 'react';
import { faBars, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faCircleQuestion,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

import { DropdownHeader } from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { UserHeader } from './User';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export function StandardHeader() {
  const [showDropdown, setShowDropdown] = useState<Boolean>(false);
  const [showUserHeader, setShowUserHeader] = useState<Boolean>(false);
  const { data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  }, [router.route]);

  return (
    <>
      <nav className="fixed top-0 left-0 flex h-12 w-full items-center justify-between bg-neutral-800 px-4 font-inter">
        {/* Logo Div */}
        <div />

        <ul className="flex items-center gap-4">
          {!data ? (
            <>
              <Link
                href="/login"
                className="hidden py-1 text-sm text-white md:block"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-md border border-white py-1 px-2 text-sm text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <li
              onMouseEnter={() => setShowUserHeader(true)}
              onMouseLeave={() => setShowUserHeader(true)}
              className="relative"
            >
              <FontAwesomeIcon
                icon={data.user?.role === 'DOCTOR' ? faUserDoctor : faUser}
                className="cursor-pointer text-2xl text-white"
                onClick={() => {}}
              />
              {showUserHeader && <UserHeader />}
            </li>
          )}

          {/* Dropdown Bars */}
          <li className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-xl text-white"
              onClick={() => setShowDropdown(true)}
            />
          </li>

          {/* Divider */}
          <span className="mx-1 hidden h-7 border-l-2 border-neutral-400 md:inline-block" />

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

      {showDropdown && <DropdownHeader setShowDropdown={setShowDropdown} />}
    </>
  );
}
