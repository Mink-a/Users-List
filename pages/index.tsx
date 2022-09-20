import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        reiciendis, deserunt, ratione possimus magnam ipsam, quae animi
        molestiae pariatur laboriosam nihil iste excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        reiciendis, deserunt, ratione possimus magnam ipsam, quae animi
        molestiae pariatur laboriosam nihil iste excepturi.
      </p>
      <Link href={"/users"}>
        <a className="bg-indigo-200 inline-block mt-4 py-1 px-3">See all users</a>
      </Link>
    </div>
  );
};

export default Home;
