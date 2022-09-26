import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav className="flex items-center justify-end gap-3 py-4">
      <div className="mr-auto text-2xl">
        <svg
          id="logo-72"
          width="52"
          height="44"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            className="ccustom"
            fill="#4543e5"
            stopColor="#4543e5"
          ></path>{" "}
        </svg>
      </div>
      <Link href={"/"}>
        <a
          className={`${
            currentRoute === "/"
              ? "bg-blue-300 text-gray-800 underline"
              : "bg-blue-100 text-gray-600"
          } px-3 py-1 hover:text-gray-800 `}
        >
          Home
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          className={`${
            currentRoute === "/about"
              ? "bg-blue-300 text-gray-800 underline"
              : "bg-blue-100 text-gray-600"
          } px-3 py-1 hover:text-gray-800 `}
        >
          About
        </a>
      </Link>
      <Link href={"/users"}>
        <a
          className={`${
            currentRoute === "/users"
              ? "bg-blue-300 text-gray-800 underline"
              : "bg-blue-100 text-gray-600"
          } px-3 py-1 hover:text-gray-800 `}
        >
          All Users
        </a>
      </Link>
      <button
        onClick={() => {
          currentTheme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="rounded border border-purple-500 px-2 py-1 font-bold dark:bg-purple-500"
      >
        {currentTheme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
