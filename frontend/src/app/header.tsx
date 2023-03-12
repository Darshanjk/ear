"use client";

import React from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import userState from "@/lib/atoms";

type Props = {};

export default function Header({}: Props) {
  const user = useRecoilValue(userState);

  const content = {
    logo: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6">
          <path
            fillRule="evenodd"
            d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
            clipRule="evenodd"
          />
          <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
        </svg>
      ),
      title: (
        <>
          OtoScope<span className="text-black"> AI</span>
        </>
      ),
    },

    menus: [
      {
        title: "Home",
        link: "/",
        active: true,
      },
      {
        title: "Our Service",
        link: "/",
      },
      {
        title: "About Us",
        link: "/",
      },
    ],
    button: {
      title: user?.accessToken ? "Dashboard" : "Login",
      link: user?.accessToken ? "/dashboard" : "/login",
    },
  };
  return (
    <header className="grid grid-rows-2 w-full py-6 border-b px-4">
      {/* Logo */}
      <div className="flex cursor-pointer justify-center object-center flex-row  space-x-2">
        <span className="text-yellow-600 items-center ">
          {content?.logo?.icon}
        </span>
        <span className="text-4xl font-bold text-sky-800">
          {content?.logo?.title}
        </span>
      </div>

      <nav className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between">
        {/* Menu Items */}
        <ul className="hidden md:flex flex-row text-xl space-x-8">
          {content?.menus &&
            content?.menus.map((item, i) => (
              <Link href={item?.link} key={i}>
                <li
                  className={`${
                    item?.active ? "font-bold  text-sky-800" : "text-sky-600"
                  } transition hover:text-black`}>
                  {item?.title}
                </li>
              </Link>
            ))}
        </ul>

        {/* Buttons */}
        <Link href={content?.button?.link}>
          <button className="rounded-md bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-900/90 focus:outline-none">
            {content?.button?.title}
          </button>
        </Link>
      </nav>
    </header>
  );
}
