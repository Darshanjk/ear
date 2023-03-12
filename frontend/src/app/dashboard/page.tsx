export const metadata = {
  title: "Dashboard | OtoScopeAI | A Healthcare App",
};

import React from "react";

import { cookies, headers } from "next/headers";
import axios from "axios";
import Layout from "./components/Layout";
import Overview from "./components/Overview";

async function getData() {
  const cookieStore = cookies();
  const access = cookieStore.get("access");
  const userConfig = {
    headers: {
      Authorization: "Bearer " + access?.value,
    },
  };
  const { data } = await axios.get(
    process.env.API_URL + "/api/v1/analytics/",
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

export default async function Dashboard() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Layout title="Dashboard">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full min-h-[75vh]">
          <Overview data={data} />
          {/* <Activity /> */}
          {/* <Patients data={data} /> */}
        </main>
      </Layout>
    </div>
  );
}
