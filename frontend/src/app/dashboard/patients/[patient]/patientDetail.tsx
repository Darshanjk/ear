"use client";
import useSWR from "swr";
import React from "react";
import { axios } from "@/lib/axios";
import { useRecoilValue } from "recoil";
import userState from "@/lib/atoms";

const fetcher = (url: any, accessToken: any) => {
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });
  return fetch(process.env.NEXT_PUBLIC_API_URL + url, { headers }).then((r) =>
    r.json()
  );
};

export default function PatientDetail({ patientId }: { patientId: string }) {
  const user = useRecoilValue(userState);

  const url = "/api/v1/patients/" + patientId;
  const { data, error, isLoading } = useSWR(url, (url) =>
    fetcher(url, user?.accessToken)
  );
  return (
    <div className="flex flex-col pt-8">
      <div className="flex flex-col space-y-4">
        <span>
          Name:
          <span
            className={`px-4 ${
              isLoading ? "" : "text-blue-500 font-semibold"
            } capitalize `}
          >
            {isLoading ? "Loading..." : data?.name}
          </span>
        </span>
        <span>
          Gender:
          <span
            className={`px-4 ${
              isLoading ? "" : "text-blue-500 font-semibold"
            } capitalize `}
          >
            {isLoading ? "Loading..." : data?.gender}
          </span>
        </span>
        <span>
          Phone:
          <span
            className={`px-4 ${
              isLoading ? "" : "text-blue-500 font-semibold"
            } capitalize `}
          >
            {isLoading ? "Loading..." : data?.phone}
          </span>
        </span>
        <span>
          Address:
          <span
            className={`px-4 ${
              isLoading ? "" : "text-blue-500 font-semibold"
            } capitalize `}
          >
            {isLoading ? "Loading..." : data?.address}
          </span>
        </span>
      </div>
    </div>
  );
}
