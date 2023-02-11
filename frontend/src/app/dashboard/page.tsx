import React from "react";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
import Activity from "./components/Activity";

export default function index() {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Layout title="Dashboard">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full">
          <Overview />
          <Activity />
        </main>
      </Layout>
    </div>
  );
}