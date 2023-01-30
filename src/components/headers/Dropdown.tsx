import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

/**
 * Dropdown header only visible for screens < 768px
 */
export function DropdownHeader({
  setShowDropdown,
}: {
  setShowDropdown: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      <nav className="absolute top-0 right-0 z-50 flex min-h-screen w-screen flex-col bg-neutral-800 px-4 pt-10">
        <FontAwesomeIcon
          icon={faClose}
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={() => setShowDropdown(false)}
        />
        <ul className="flex gap-3">
          <Link
            href="/register"
            className="cursor-pointer rounded-md border border-white py-1 px-2 text-sm text-white"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="cursor-pointer py-1 text-sm text-white"
          >
            Login
          </Link>
        </ul>
      </nav>
    </>
  );
}
