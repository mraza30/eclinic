import Image from 'next/image';
import React from 'react';

export default function Labs(props: any) {
  return (
    <div className="w-7/6 mx-20 mt-8 mb-10 flex h-80 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="flex h-56 w-64 ">
        <Image
          width="120"
          height="120"
          alt="lab"
          src="/Chughtais.png"
          className="mx-10 mt-8 h-auto w-auto"
        />
      </div>
      <div className="flex text-white">
        <div>
          <p className="mx-20 mt-10 w-full flex-col font-sans text-2xl font-medium italic underline decoration-white">
            {props.labName}
          </p>

          <p className=" mx-20 mt-5 flex-col font-sans text-lg font-medium">
            {props.address}
          </p>
        </div>
      </div>
    </div>
  );
}
