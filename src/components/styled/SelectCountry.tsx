import '/node_modules/flag-icons/css/flag-icons.min.css';

import React, { useState } from 'react';

import { GrClose } from 'react-icons/gr';
import { countries } from 'country-data';

export function SelectCountry({ setPhoneState, setValue }: any) {
  const [search, setSearch] = useState('');

  return (
    <div className="fixed top-0 left-0 z-50 flex min-h-screen w-full max-w-screen-2xl items-end bg-gray-400 bg-opacity-50 md:items-center md:justify-center">
      <div className="relative h-96 max-h-screen w-full select-none overflow-hidden rounded-xl bg-white pt-32 shadow-lg md:w-96">
        <div className="absolute top-0 left-0 flex h-32 w-full flex-col justify-center gap-3 px-5 shadow-md">
          <GrClose
            className="absolute top-4 right-4 cursor-pointer text-xl"
            onClick={() => {
              setPhoneState((prev: any) => ({
                ...prev,
                selectCountry: false,
              }));
            }}
          />
          <div className="text-lg font-medium text-gray-500">
            Select area code
          </div>
          <input
            className="rounded-md border border-gray-300 p-2 outline-none"
            placeholder="Search"
            value={search}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <ul className="flex h-full flex-col overflow-y-auto">
          {countries.all
            .filter(
              ({ name, status, countryCallingCodes }) =>
                status === 'assigned' &&
                countryCallingCodes.length &&
                (search.length
                  ? name.toLowerCase().includes(search.toLowerCase())
                  : name)
            )
            .map(({ alpha2, countryCallingCodes, name }) => (
              <li
                className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-200"
                value={alpha2}
                key={alpha2}
                onClick={() => {
                  setValue('country', alpha2);
                  setPhoneState({
                    countryDropdown: false,
                    alpha2: alpha2,
                    countryCallingCodes: countryCallingCodes,
                  });
                }}
              >
                <div
                  className={`fib fi-${alpha2.toLowerCase()} fis h-9 w-9 rounded-full`}
                />
                <div className="w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                  {name}
                </div>
                <div className="flex-1 text-right">
                  {countryCallingCodes[0]}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
