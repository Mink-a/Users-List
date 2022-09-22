import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const paths = data.map((user: { id: String }) => {
    return { params: { id: user.id.toString() } };
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: String } }) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { user: data },
  };
};

interface Props {
  user: { name: String; id: String };
}

const DynamicePage: NextPage<Props> = ({ user }) => {
  return (
    <>
    <Head>
      <title>User Details</title>
    </Head>
      <div className="text-center font-bold text-xl text-indigo-600 bg-slate-300 py-1">{user.id}</div>
      <div className="text-center bg-slate-50 h-[60vh] flex justify-center items-center font-fancy text-3xl">{user.name}</div>
      <Link href={"/users"}>
        <a className="mt-4 inline-block text-white hover:rounded bg-indigo-600 py-1 px-3">
          See all users
        </a>
      </Link>
    </>
  );
};

export default DynamicePage;
