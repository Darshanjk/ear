"use client";
import useSWR from "swr";
import React from "react";
import userState from "@/lib/atoms";
import { useRecoilValue } from "recoil";

const fetcher = (url: any, accessToken: any) => {
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });
  return fetch(process.env.NEXT_PUBLIC_API_URL + url, { headers }).then((r) =>
    r.json()
  );
};

export default function PatientRecords({ patientId }: { patientId: string }) {
  const user = useRecoilValue(userState);

  const url = "/api/v1/patient/" + patientId + "/records";
  const { data, error, isLoading } = useSWR(url, (url) =>
    fetcher(url, user?.accessToken)
  );
  return (
    <div className="py-6 space-y-8">
      <h3 className="text-xl font-semibold">Patient Records</h3>
      {isLoading ? (
        <div className="bg-gray-100 h-48 w-full rounded shadow-sm animate-pulse flex justify-center items-center ">
          {" "}
          Loading...
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
