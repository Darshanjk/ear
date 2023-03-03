export const metadata = {
  title: "Prediction | Dashboard | EarCareIQ | A Healthcare App",
};

import Prediction from "@/app/try-now/prediction";
import React from "react";
import Layout from "../components/Layout";

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Layout title="Predict Otitis Media">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full">
          <div className="flex flex-col justify-center items-center min-h-[75vh] space-y-4">
            <div className="flex flex-col space-y-2 items-center">
              <h1 className="font-bold text-center text-3xl text-sky-600 flex flex-col">
                Otitis Media Detection App
              </h1>
            </div>
            {/* Prediction Section  */}
            <Prediction />
          </div>
        </main>
      </Layout>
    </div>
  );
}
