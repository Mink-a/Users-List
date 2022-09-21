import { NextPage } from "next";
import Head from "next/head";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>Next Website | About</title>
      </Head>
      <div>
        <h1>About Page</h1>
      </div>
    </>
  );
};

export default About;
