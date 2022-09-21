import { NextPage } from "next";
import { Key } from "react";

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
      <h1>All Users</h1>
      <div>
        {users.map(({ id, name }: { id: Key; name: String }) => {
          return <h4 key={id}>{name}</h4>;
        })}
      </div>
    </div>
  );
};

export default AllUsers;
