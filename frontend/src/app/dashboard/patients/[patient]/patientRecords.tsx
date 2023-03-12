"use client";
import useSWR from "swr";
import React, { useState, Fragment, startTransition } from "react";
import userState from "@/lib/atoms";
import { useRecoilValue } from "recoil";
import { Dialog, Transition } from "@headlessui/react";
import Predict from "./predict";
import { useRouter } from "next/navigation";
import Image from "next/image";

const fetcher = (url: any, accessToken: any) => {
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });
  return fetch(process.env.NEXT_PUBLIC_API_URL + url, { headers }).then((r) =>
    r.json()
  );
};

export default function PatientRecords({
  patientId,
  data,
}: {
  patientId: string;
  data: any;
}) {
  const user = useRecoilValue(userState);
  let [isOpen, setIsOpen] = useState(false);

  const url = "/api/v1/patient/" + patientId + "/records";
  // const { data, error, isLoading } = useSWR(url, (url) =>
  //   fetcher(url, user?.accessToken)
  // );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const router = useRouter();

  const [checkupData, setCheckupData] = useState("");
  const [condition, setCondition] = useState("");
  const [filePath, setFilePath] = useState<any>("");

  const handleSave = () => {
    closeModal();

    fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user?.accessToken,
      },
      method: "POST",
      body: JSON.stringify({
        checkup_data: checkupData,
        condition: condition,
        image_path: filePath,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          router.refresh();
          setFilePath("");
          setCheckupData("");
          setCondition("");
        });
      })
      .catch((res) => console.log(res));
  };
  return (
    <div className="py-6 space-y-8">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl text-sky-700 font-bold">Patient Records</h2>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-sky-800 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Patient Record
        </button>
      </div>
      {data.length === 0 ? (
        <div className="bg-gray-100 h-60 w-full rounded shadow-sm animate-pulse flex justify-center items-center ">
          {" "}
          No Data found.
        </div>
      ) : (
        <>
          {data && (
            <div className="flex flex-col space-y-6">
              {data.slice(0, 10)?.map((record: any, i: any) => (
                <div
                  key={i}
                  className="flex flex-row bg-gray-100 shadow-sm p-4 cursor-pointer rounded hover:-translate-y-1 transition-all space-x-4"
                >
                  <div className="flex items-center">
                    {" "}
                    <span className="bg-sky-200 h-8 text-center flex justify-center w-8 rounded-full items-center ">
                      {i + 1}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                    <div className="flex flex-col space-y-2">
                      <p>
                        <span className="text-sky-600">Condition:</span>{" "}
                        {record?.condition}
                      </p>
                      <p>
                        <span className="text-sky-600">Date:</span>{" "}
                        {record?.date && (
                          <span>{new Date(record?.date).toLocaleString()}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-sky-600">Checkup Details:</span>
                      <p>{record?.checkup_data}</p>
                    </div>
                    <div className="flex justify-end">
                      {record?.image_path && (
                        <Image
                          alt="prediction image"
                          className="aspect-square"
                          width={128}
                          height={128}
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            "/" +
                            record?.image_path
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-w-4xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-sky-700"
                  >
                    Add Patient Record
                  </Dialog.Title>
                  <div
                    onClick={closeModal}
                    className="absolute top-3 right-3 bg-slate-50/50 hover:bg-slate-100 transition rounded-full p-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="py-4 flex flex-col space-y-6 order-2 sm:order-1">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="condition"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Condition
                        </label>
                        <input
                          type="text"
                          name="condition"
                          id="condition"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                          className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="checkupData"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Prediction Results and Checkup Details
                        </label>
                        <textarea
                          rows={10}
                          cols={40}
                          name="checkupData"
                          id="checkupData"
                          value={checkupData}
                          onChange={(e) => setCheckupData(e.target.value)}
                          className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                        />
                      </div>
                    </div>
                    <div className=" order-1 sm:order-2 ">
                      <Predict filePath={filePath} setFilePath={setFilePath} />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
