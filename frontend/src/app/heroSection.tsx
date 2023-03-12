import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

export default function HeroSection({}: Props) {
  const content = {
    description: "Revolutionizing ear health with deep learning technology",
    cta_button: "Try Now",
    images: {
      a: "/doctor-using-laptop-thinking.jpg",
      b: "/young-female-doctor.jpg",
      c: "/successful-medical-team.jpg",
    },
  };
  return (
    <section className="w-full  py-8">
      {/* Background Image */}
      <div
        className="mx-auto max-w-5xl   justify-items-center object-fit "
        style={{ backgroundImage: "url(/background.png)" }}>
        <div className="mx-auto grid grid-cols-1 cursor-default pt-8 md:grid-cols-2 ">
          {/* Main Content */}
          <div className="flex flex-col p-6 space-y-3">
            <h1 className="flex flex-col px-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              <span> For Best </span>
              <span>
                <span className=""> Medical</span> and{" "}
                <span className="text-red-800  space-y-5 ">Health </span>{" "}
              </span>
              <span>Care</span>
            </h1>
          </div>
        </div>

        <div className="text-xl cursor-default  hover:scale-110 text-center text-black">
          "{content?.description}"
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-center space-x-8 p-6">
          <Link href="try-now">
            <button className="rounded-md bg-black px-10 py-3 font-semibold text-white transition hover:bg-sky-500 focus:outline-none">
              {content?.cta_button}
            </button>
          </Link>
          <button className="rounded-md bg-black px-10 py-3 font-semibold text-white transition hover:bg-sky-500 focus:outline-none">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
