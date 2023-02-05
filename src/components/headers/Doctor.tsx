import Image from 'next/image';
import React from 'react';

export default function Doctor(props: any) {
  return (
    <div className="h-50 w-7/6 mx-20 mt-8 mb-10 flex bg-gradient-to-r from-gray-900 to-gray-800">
      <div className=" hidden flex-col md:block">
        <div className="h-40 w-40">
          <Image
            width="120"
            height="300"
            alt="doctor"
            src="/chughtai.png"
            className=" mx-6 mt-8 h-auto w-auto rounded-full"
          />
        </div>

        <div className=" mx-10 mb-10 text-white">
          {props.strategy}
          <div className="card--stats ">
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) </span>
            <span className="gray">{props.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col items-center text-white md:hidden">
        <Image
          width="120"
          height="300"
          alt="doctor"
          src="/chughtai.png"
          className=" h-auto w-auto rounded-full"
        />

        <div className="mt-3 font-sans text-2xl font-medium italic underline decoration-white">
          {props.name}
        </div>

        <div className="text-md mt-5 font-sans ">
          {props.title}
          <br></br>
          {props.degree}
          <br></br>
        </div>

        <div className="h-50 w-40">
          <div>
            <button className="text-md mt-10 h-8 w-40 border bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
              Video Consultation
            </button>
          </div>
          <div>
            <button className="text-md mt-5 h-8 w-40 border bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
              Book Appointment
            </button>
          </div>
        </div>

        <div className="flex h-20 w-full"></div>
      </div>

      <div className="h-50 hidden w-2/3 md:block">
        <div className="mx-5 mt-14 font-sans text-2xl font-medium italic text-white underline decoration-white">
          {props.name}
        </div>
        <br></br>
        <div className="font-sm mx-5 mb-0 mt-5 font-sans text-white ">
          {props.title}
          <br></br>
          {props.degree}
          <br></br>

          {props.description}
        </div>
        <br></br>
      </div>

      <div className="h-50 hidden w-64 flex-col items-center md:block">
        <div>
          <button className="tex-center text-1xl mt-16 mr-8 h-14 w-56 border bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-semibold text-white">
            Video Consultation
          </button>
        </div>
        <div>
          <button className="tex-center text-1xl mt-8 mr-8  h-14 w-56 border bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-semibold text-white">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
