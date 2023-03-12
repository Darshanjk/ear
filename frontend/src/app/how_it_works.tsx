import React from "react";
import Image from "next/image";

export default function WorkList() {
  const content = {
    title: "How OtoScopeAI Works?",
    subtitle: "Get a Diagnosis in 3 Simple Steps",
    works: [
      "1. Upload an image of your ear.",
      "2. Receive an instant diagnosis using deep learning algorithms.",
      "3. Get access to expert medical advice and treatment options.",
    ],
  };
  return (
    <section className="w-full">
      <div className="relative overflow-hidden mx-auto space-y-4 flex flex-col justify-center items-center max-w-7xl rounded-2xl p-16">
       
          <h3 className="text-5xl  text-sky-700  sm:text-left font-bold max-w-6xl ">
            {content?.title}
          </h3>
          <h2 className="flex text-xl space-y-2 hover:scale-110 text-sky-400 sm:text-left font-light ">
            {content?.subtitle}
          </h2>
       
        <ul className="flex flex-col space-y-3 relative">
          {content?.works.map((work, i) => (
            <li
              className=" text-base font-semibold p-3 inline-flex items-center space-x-1 rounded hover:scale-105 cursor-default transition-all"
              key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>

              <span>{work}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
