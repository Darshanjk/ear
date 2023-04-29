import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PatientsLists({ data }: { data: any }) {
  const img =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";

  return (
    <div className="flex flex-col p-16 bg-gray-50 items-center justify-center rounded-md min-h-[55vh]">
      <div className="flex flex-col shadow">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S.N.
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created at
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    data.length >= 0 &&
                    data.map((item: any, i: any) => (
                      <tr key={i} className="hover:bg-gray-50 transition">
                        <td className="text-center">
                          <span>{i + 1}</span>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image
                                className="h-8 w-8 rounded-full"
                                src={"https://ui-avatars.com/api/?name=" + item?.name}
                                width={32}
                                height={32}
                                alt=""
                              />
                            </div>
                            <div className="ml-4 space-y-1">
                              <Link
                                href={`/dashboard/patients/${encodeURIComponent(
                                  item?.id
                                )}`}
                                key={i}
                              >
                                <div className="text-sm font-medium underline underline-offset-2 text-blue-600">
                                  {item?.name}
                                </div>
                              </Link>

                              <div className="text-sm text-gray-500">
                                {item?.age}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item?.gender}
                          </div>
                          <div className="text-sm text-gray-500">
                            {"Patient"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item?.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item?.created_at && (
                            <span>
                              {new Date(item?.created_at).toDateString()}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            href={`/dashboard/patients/${encodeURIComponent(
                              item?.id
                            )}`}
                            key={i}
                          >
                            <span className="px-3 py-1 transition inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 hover:bg-green-200 text-green-800">
                              View
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* {data &&
        data.map((item: any, i: any) => (
          <li
            key={i}
            className="flex flex-row space-x-4 bg-white px-6 py-3 rounded hover:bg-sky-50 cursor-pointer "
          >
            <span>Id: {item?.id}</span>
            <span>Patien name: {item?.name}</span>
          </li>
        ))} */}
      {!data.length && <span className="text-center">No Patient data</span>}
      {/* </ul> */}
    </div>
  );
}
