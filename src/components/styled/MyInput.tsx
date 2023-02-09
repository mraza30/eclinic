import React from 'react';
import clsx from 'clsx';

export function MyInput({ label, type, name, register, errors }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        className={clsx(
          'h-10 w-full rounded-md border p-2 outline-none',
          errors[name]
            ? 'border-red-500'
            : 'border-gray-300 focus:border-sky-500'
        )}
        type={type}
        {...register(name)}
      />
      <p className="text-xs text-red-500">{errors[name]?.message}</p>
    </div>
  );
}
