import React from 'react';

export function MyForm({ title, onSubmit, children }: any) {
  return (
    <>
      <div className="flex w-72 flex-col gap-5 md:w-80 lg:w-96">
        <div className="text-3xl font-semibold">{title}</div>
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-2">
          {children}
        </form>
      </div>
    </>
  );
}
