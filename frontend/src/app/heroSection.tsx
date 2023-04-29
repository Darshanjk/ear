import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

export default function HeroSection({}: Props) {
  const content = {
    description: "Quick and accurate ear infection detection with OtoScopeAI.",
    cta_button: "Try Now",
    images: {
      a: "/ear-screening.jpg",
      b: "/doctor-checking-patient.png",
      c: "/ear-checkup.jpg",
    },
  };
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 pt-8 md:grid-cols-2">
        {/* Main Content */}
        <div className="flex flex-col space-y-8 py-24">
          <h1 className="flex flex-col text-4xl sm:text-4xl font-bold text-sky-800">
            {/* <span> For Best </span>
            <span>
              <span className="border border-sky-500 px-4"> Medical</span> and{" "}
              <span className="text-sky-500">Health </span>{" "}
            </span>
            <span>Care</span> */}
            <span className="text-3xl text-pink-600">Revolutionizing</span>
            Ear Health with
            <span className="text-sky-600">Deep Learning Technology</span>
          </h1>
          <p className="text-lg text-sky-600">{content?.description} </p>

          {/* Buttons */}
          <div className="flex flex-row space-x-8 pt-6">
            <Link href="try-now">
              <button className="rounded-md bg-sky-900 px-10 py-3 font-semibold text-white transition hover:bg-sky-900/90 focus:outline-none">
                {content?.cta_button}
              </button>
            </Link>
            <button className="font-semibold text-sky-500 transition hover:text-sky-700 focus:outline-none">
              See more
            </button>
          </div>
        </div>
        {/* Images */}
        <div className="relative flex flex-col min-h-[38vh]">
          <div className="absolute hidden sm:flex lg:left-16 top-1/3 z-10 -mt-2 h-48 w-[22rem] ">
            <Image
              className=" object-contain "
              src={content?.images?.a}
              fill
              priority
              alt="Doctor a"
            />
          </div>
          <div className="absolute hidden sm:flex right-4 top-4 z-10 h-[204px] w-[204px]">
            <Image
              className="object-cover"
              src={content?.images?.b}
              fill
              priority
              alt="Doctor b"
            />
          </div>
          <div className="absolute right-4 bottom-4 z-10 h-[204px] w-[204px]">
            <Image
              className="object-cover"
              src={content?.images?.c}
              fill
              priority
              alt="Doctor c"
            />
          </div>
          {/* patterns */}
          <div className="absolute lg:left-60 bottom-0 z-10 flex flex-row">
            <div className="flex flex-col items-end justify-end">
              <div className="h-10 w-10 rounded-full bg-emerald-500"></div>
              <div className="h-20 w-20 rounded-tl-full bg-yellow-400"></div>
            </div>
            <div className="h-20 w-20 rounded-br-full bg-sky-400"></div>
          </div>
          <div className="absolute right-0 z-0 h-full w-1/2 bg-sky-800"></div>
        </div>
      </div>
    </section>
  );
}
