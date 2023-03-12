import React from "react";

const options: any = {
  timeZone: "Asia/Kathmandu",
  hour12: true,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export default function Overview({ data }: { data: any }) {
  const date = new Date().toLocaleString("en-US", options);
  return (
    <section className="py-6">
      <div className="flex flex-row  pb-4 text-cool-600 font-medium justify-between items-baseline">
        <p className=" text-lg">Overview</p>
        <small className="text-sm sm:text-normal">As of {date}</small>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg bg-bluegray-700">
        <div className="flex flex-col border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r border-cool-500">
          <div className="flex flex-row px-4 md:px-8  py-6 space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>

            <div>
              <div className="flex flex-row space-x-16 md:space-x-10 justify-between items-center">
                <p className="text-sm font-normal  text-cool-400 uppercase">
                  Total Patients
                </p>
                <div className="flex flex-row space-x-1">
                  <p className="text-cool-300 text-sm pt-2"> 15%</p>
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-semibold text-cool-200">
                {data?.patients_count}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b sm:border-b lg:border-b-0 lg:border-r border-cool-500">
          <div className="flex flex-row px-4 md:px-8  py-6 space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>

            <div>
              <div className="flex flex-row space-x-16 md:space-x-10 justify-between items-center">
                <p className="text-sm font-normal  text-cool-400 uppercase">
                  Total Records
                </p>
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-3xl font-semibold text-cool-200">
                {data?.records_count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
