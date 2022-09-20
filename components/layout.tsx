import { NextPage } from "next";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../styles/Home.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="mx-auto my-0 w-9/12">
      <Navbar />
      <main className="min-h-[50vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
