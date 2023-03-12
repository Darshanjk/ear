import Link from "next/link";
import React from "react";

export default function Cta() {
  const content = {
    title: "Get a Diagnosis in Minutes with EarCheckAI",
    cta_button: "Upload your ear image now",
  };
  return (
    <section className="w-full py-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-8">
          <h3 className="text-4xl text-center sm:text-left text-sky-700 font-bold max-w-lg ">
            {content?.title}
          </h3>
        </div>
        <div className="flex justify-end px-8 items-center">
          <Link
            href="/try-now"
            className=" bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-md text-white font-medium"
          >
            <button>{content?.cta_button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
