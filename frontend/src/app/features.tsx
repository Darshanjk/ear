import React from "react";
import Image from "next/image";
type Props = {};

export default function Features({}: Props) {
  const content = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Free Support",
      description: "",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Consulting",
      description: "",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      title: "Online Care",
      description: "",
    },
  ];
  const features = {
    title: "Why Choose EarCheckAI?",
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
      <ul className="mx-auto grid max-w-7xl grid-cols-1 rounded-t-3xl bg-sky-900 p-8 text-white md:grid-cols-3">
        {content &&
          content.map((item, i) => (
            <li
              className="flex cursor-pointer flex-row place-content-center items-center space-x-4 rounded p-4 transition hover:bg-sky-800"
              key={i}
            >
              <div className="rounded bg-white p-3 text-sky-900">
                {item?.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">{item?.title}</h3>
                <p className="max-w-[150px] text-xs font-light ">
                  Lorem Ipsum is simply dummy text.
                </p>
              </div>
            </li>
          ))}
      </ul>
      <div className="my-6 relative overflow-hidden bg-sky-600 text-white mx-auto space-y-8 flex flex-col justify-center items-center max-w-7xl rounded-2xl p-16">
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
              className="bg-sky-50 p-3 inline-flex items-center space-x-1 rounded hover:-translate-y-1 hover:translate-x-1 cursor-pointer transition-all text-emerald-700"
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
