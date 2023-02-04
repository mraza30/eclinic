import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MobileHeader } from './Mobile';
import { VscThreeBars } from 'react-icons/vsc';
import { useMobileHeader } from '@/store/header';

export function StandardHeader() {
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [showHospitalsDropdown, setShowHospitalsDropdown] = useState(false);
  const [mobileHeader, showMobileHeader] = useMobileHeader((state) => [
    state.mobileHeader,
    state.showMobileHeader,
  ]);
  return (
    <>
      <header className="fixed top-0 left-0 flex h-14 w-full items-center justify-between bg-white px-4 font-inter shadow-md md:gap-10">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="../logo.svg"
            width="130"
            height="130"
            alt="Logo of E-Clinic"
            priority={true}
          />
        </Link>

        <div className="hidden flex-1 gap-4 md:flex">
          <div
            className="flex cursor-pointer items-center hover:text-sky-500"
            onMouseEnter={() => setShowDoctorsDropdown(true)}
            onMouseLeave={() => setShowDoctorsDropdown(false)}
          >
            Doctors
            {!showDoctorsDropdown ? (
              <IoMdArrowDropdown className="text-2xl text-gray-500" />
            ) : (
              <IoMdArrowDropup className="text-2xl text-gray-500" />
            )}
          </div>
          <div
            className="flex cursor-pointer items-center hover:text-sky-500"
            onMouseEnter={() => setShowHospitalsDropdown(true)}
            onMouseLeave={() => setShowHospitalsDropdown(false)}
          >
            Hospitals
            {!showHospitalsDropdown ? (
              <IoMdArrowDropdown className="text-2xl text-gray-500" />
            ) : (
              <IoMdArrowDropup className="text-2xl text-gray-500" />
            )}
          </div>
          <Link
            className="flex cursor-pointer items-center hover:text-sky-500"
            href="/blog"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="hidden hover:text-sky-400 md:block"
            href="/auth/login"
          >
            Log In
          </Link>
          <Link
            className="rounded-md bg-sky-400 py-2 px-3 text-white hover:bg-opacity-80"
            href="/auth/register"
          >
            Register
          </Link>
          <VscThreeBars
            className="cursor-pointer text-3xl hover:text-sky-400 md:hidden"
            onClick={showMobileHeader}
          />
        </div>
      </header>

      {<AnimatePresence>{mobileHeader && <MobileHeader />}</AnimatePresence>}
    </>
  );
}
