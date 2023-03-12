import React from "react";
import Image from "next/image";

export default function FeaturesList() {
  const features = {
    title: "Why Choose OtoScopeAI?",
    background: "/features-bg-1.avif",
    features: [
      "Accurate ear infection diagnosis using deep learning algorithms",
      "Easy-to-use interface for quick and simple image uploads",
      "Secure and confidential data management to protect your privacy",
      "Access to expert medical advice from our team of ear specialists",
    ],
  };
  return (
    <section className="w-full">
      <div className="relative overflow-hidden bg-sky-600 text-white mx-auto space-y-8 flex flex-col justify-center items-center max-w-7xl rounded-2xl p-16">
        <div className="absolute">
          <Image
            src={features?.background}
            alt={features?.title}
            width={1920}
            height={1080}
            className="opacity-10 filter saturate-50 blur-sm "
          />
        </div>
        <h3 className="text-5xl relative font-bold">{features?.title}</h3>
        <ul className="flex flex-col space-y-3 relative">
          {features?.features.map((feature, i) => (
            <li
              className="bg-white text-base font-normal p-3 inline-flex items-center space-x-1 rounded hover:-translate-y-1 hover:translate-x-1 cursor-pointer transition-all text-emerald-700"
              key={i}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
