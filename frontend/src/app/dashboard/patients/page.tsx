export const metadata = {
  title: "Patients | Dashboard | EarCareIQ | A Healthcare App",
};

import React from "react";
import Layout from "../components/Layout";

import Patients from "../components/Patients";
import { cookies, headers } from "next/headers";
import axios from "axios";
async function getData() {
  const cookieStore = cookies();
  const access = cookieStore.get("access");
  const userConfig = {
    headers: {
      Authorization: "Bearer " + access?.value,
    },
  };
  const { data } = await axios.get(
    process.env.API_URL + "/api/v1/patients/",
    userConfig
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function PatientsDashboard() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Layout title="Patients">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full">
          {/* <Overview /> */}
          {/* <Activity /> */}
          <Patients data={data} />
          <h4></h4>
        </main>
      </Layout>
    </div>
  );
}
