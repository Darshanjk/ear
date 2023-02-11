"use client";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { useState } from "react";
import {useAuth} from "@/lib/auth"
import { useRecoilState } from "recoil";
import userState from "@/lib/atoms";
import { useRouter } from "next/navigation";

type errors = {
  detail?: string;
};

export default function Page() {
  const page = {
    title: "LOGIN",
  };
  const {login}= useAuth()
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<errors>({});
  const [user, setUser] = useRecoilState(userState);

  if(user.accessToken){
    router.push("/dashboard")
  }

  const submitForm = async (event:any) => {
    event.preventDefault();
    
    login({ email, password, setErrors,setUser });
  };
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50/50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex flex-col">
        <section className="py-32 ">
          <div className=" mx-auto max-w-md rounded-lg border p-12 shadow ">
            <h2 className="text-center text-2xl font-bold text-gray-700">
              {page?.title}
            </h2>
            <form
              onSubmit={submitForm}
              autoComplete="off"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="mt-1 block w-full rounded-lg bg-yellow-50/50 border px-4 py-2 text-gray-600 focus:outline-none"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  className="mt-1 block w-full rounded-lg bg-yellow-50/50 border px-4 py-2 text-gray-600 focus:outline-none"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="text-center h-4">
              {"detail" in errors && (
                  <small className="text-red-500 text-center">Error: {errors?.detail}</small>
                )}
              </div>
              <div className="flex justify-center pt-4">

                <button className="rounded-full border border-gray-800 px-8 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-black sm:text-base">
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
