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
        <h1>Users List</h1>
      </div>
      <Link href={"/"}>
        <a
          className={
            currentRoute === "/"
              ? "bg-blue-300 px-3 text-gray-800 hover:text-gray-800 underline py-1"
              : "bg-blue-100 px-3 text-gray-600 hover:text-gray-800 py-1"
          }
        >
          Home
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          className={
            currentRoute === "/about"
              ? "bg-blue-300 px-3 text-gray-800 hover:text-gray-800 underline py-1"
              : "bg-blue-100 px-3 text-gray-600 hover:text-gray-800 py-1"
          }
        >
          About
        </a>
      </Link>
      <Link href={"/users"}>
        <a
          className={`px-3 hover:text-gray-800 py-1 ${
            currentRoute === "/users"
              ? "bg-blue-300 text-gray-800 underline"
              : "text-gray-600 bg-blue-100"
          }`}
        >
          All Users
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
