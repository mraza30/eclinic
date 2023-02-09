import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import React, { useState } from 'react';

import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function MobileHeader({
  setMobileHeader,
}: {
  setMobileHeader: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [showHospitalsDropdown, setShowHospitalsDropdown] = useState(false);
  return (
    <>
      <motion.header
        className="fixed top-0 right-0 z-50 min-h-screen w-64 bg-white pt-14 font-inter shadow-md md:hidden"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ duration: 0.25, ease: 'linear' }}
      >
        <GrClose
          className="absolute top-4 right-4 cursor-pointer text-xl"
          onClick={() => setMobileHeader(false)}
        />
        <div className="mx-3 flex flex-col gap-4">
          <Link
            href="/auth/login"
            className="w-full text-center hover:text-sky-400"
          >
            Log In
          </Link>
          <Link
            href="/auth/register"
            className="w-full rounded-md bg-sky-400 py-2 text-center text-white hover:opacity-80"
          >
            Register
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-2 font-light">
          <div
            className="flex cursor-pointer justify-between p-3 hover:bg-gray-200"
            onClick={() => setShowDoctorsDropdown((prev) => !prev)}
          >
            Doctors
            {!showDoctorsDropdown ? (
              <IoMdArrowDropdown className="text-2xl text-gray-500" />
            ) : (
              <IoMdArrowDropup className="text-2xl text-gray-500" />
            )}
          </div>

          <div
            className="flex cursor-pointer justify-between p-3 hover:bg-gray-200"
            onClick={() => setShowHospitalsDropdown((prev) => !prev)}
          >
            Hospitals
            {!showHospitalsDropdown ? (
              <IoMdArrowDropdown className="text-2xl text-gray-500" />
            ) : (
              <IoMdArrowDropup className="text-2xl text-gray-500" />
            )}
          </div>

          <Link className="p-3 hover:bg-gray-200" href="/blog">
            Blog
          </Link>
        </div>
      </motion.header>
    </>
  );
}
