import { NextPage } from "next";
import { Key } from "react";
import Link from "next/link";

interface Props {
  users: [];
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};

const AllUsers: NextPage<Props> = ({ users }: Props) => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">All Users</h1>
      <div>
        {users.map(({ id, name }: { id: Key; name: String }) => {
          return (
            <Link href={`/users/${id}`} key={id}>
              <a className="mb-4 block cursor-pointer border-l-4 bg-slate-100 p-4 hover:-translate-y-px hover:border-indigo-500 hover:drop-shadow hover:transition-all">
                <h3>{name}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllUsers;
