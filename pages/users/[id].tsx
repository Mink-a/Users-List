import { NextPage } from "next";
import { Key } from "react";

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
  user: { name: String };
}

const DynamicePage: NextPage<Props> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default DynamicePage;
