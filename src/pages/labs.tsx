import React from 'react';
import { StandardLayout } from '@/layouts/Standard';
import Lab from '@/components/headers/labs';
import data from '@/components/headers/labsData';

export default function DoctorPage() {
  const labs = data.map((item) => {
    return <Lab key={item.id} {...item} />;
  });

  return (
    <>
      <div className="mt-12 h-full w-full flex-col bg-black">
        <div className="flex w-full border-spacing-8 border border-purple-900 bg-black ">
          <div className="h-100 mx-28 mt-10">
            <h1 className="font-mono text-xl font-bold text-white decoration-auto">
              Labs In Lahore
            </h1>
            <h3 className="font-mono text-sm text-white decoration-auto">
              Use the latest technology and have the best human resources
              available to provide you with accurate lab tests and that too at
              your doorstep.
            </h3>
          </div>
        </div>

        <div>{labs}</div>

        <div className="h-50 mt-48 flex w-full bg-black"></div>
      </div>
    </>
  );
}
