import '/node_modules/flag-icons/css/flag-icons.min.css';

import React, { useEffect, useState } from 'react';

import { SelectCountry } from './SelectCountry';
import clsx from 'clsx';
import { lookup } from 'country-data';

export default function MyPhoneInput({ register, errors, setValue }: any) {
  const [{ selectCountry, alpha2, countryCallingCodes }, setPhoneState] =
    useState({
      selectCountry: false,
      alpha2: '',
      countryCallingCodes: [''],
    });

  useEffect(() => {
    fetch('https://extreme-ip-lookup.com/json/?key=22Hz8EvqlyykiKpMYSwc')
      .then((res) => res.json())
      .then((data) => {
        const ipCountry = lookup.countries({ name: data.country })[0];
        if (ipCountry) {
          setValue('country', ipCountry?.alpha2);
          setPhoneState({
            selectCountry: false,
            alpha2: ipCountry.alpha2,
            countryCallingCodes: [...ipCountry.countryCallingCodes],
          });
        }
      });
  }, []);

  return (
    <>
      {selectCountry && (
        <SelectCountry setPhoneState={setPhoneState} setValue={setValue} />
      )}
      <div className="flex flex-col">
        <label className="text-sm">Phone number</label>
        <div className="flex gap-2">
          <div
            className="flex h-10 w-1/3 cursor-pointer items-center justify-evenly rounded-md border border-gray-300 p-1 md:w-1/4"
            onClick={() =>
              setPhoneState((prev) => ({ ...prev, selectCountry: true }))
            }
          >
            <div
              className={`fib fi-${alpha2.toLowerCase()} fis h-7 w-7 rounded-full`}
            />
            <div> {countryCallingCodes[0]}</div>
          </div>
          <div className="flex-1">
            <input
              className={clsx(
                'h-10 w-full rounded-md border p-2 outline-none',
                errors.phone
                  ? 'border-red-500'
                  : 'border-gray-300 focus:border-sky-500'
              )}
              type="tel"
              {...register('phone')}
            />
            <p className="text-xs text-red-500">{errors.phone?.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
