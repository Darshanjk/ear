export const metadata = {
  title: "Patient | Dashboard | OtoScopeAI | A Healthcare App",
};

import React from "react";

import { cookies, headers } from "next/headers";
import axios from "axios";
import Layout from "../../components/Layout";
import PatientDetail from "./patientDetail";
import PatientRecords from "./patientRecords";

export default async function Patient({
  params,
}: {
  params: { patient: string };
}) {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Layout title="Patient">
        <main className="max-w-7xl flex flex-col container mx-auto px-8 sm:px-14 lg:px-20 w-full min-h-[75vh]">
          <PatientDetail patientId={params?.patient} />
          <PatientRecords patientId={params?.patient} />
        </main>
      </Layout>
    </div>
  );
}
