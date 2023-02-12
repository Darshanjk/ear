"use client";
import userState from "@/lib/atoms";
import { fetcher } from "@/lib/axios";
import React, { useState, Fragment } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";
import PatientsLists from "./PatientsLists";
import { Dialog, Transition } from "@headlessui/react";

export default function Patients({ data }: { data: any }) {
  const user = useRecoilValue(userState);
  let [isOpen, setIsOpen] = useState(false);

  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("");
  let [phone, setPhone] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSave = () => {
    closeModal();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/v1/patients/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user?.accessToken,
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        age: age,
        address: address,
        gender: gender,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((res) => console.log(res));
  };
  return (
    <div className="flex flex-col py-14 space-y-8">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl text-sky-700 font-bold">Patients</h2>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-sky-800 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Patient
        </button>
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Patient
                  </Dialog.Title>
                  <div className="py-4 flex flex-col space-y-3">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 border block w-full rounded-md px-2 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
      <PatientsLists data={data} />
    </div>
  );
}
