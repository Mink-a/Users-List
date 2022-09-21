import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className="flex justify-end items-center gap-3 py-4">
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
          } px-3 hover:text-gray-800 py-1 `}
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
          } px-3 hover:text-gray-800 py-1 `}
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
          } px-3 hover:text-gray-800 py-1 `}
        >
          All Users
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
