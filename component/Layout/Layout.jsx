import React from "react";
import Header from "../Header/Header";
import MegaMenu from "../MegaMenu/MegaMenu";
import {useRouter} from "next/router";
import Footer from "../Footer/Footer";
const Layout = ({children}) => {
  const router = useRouter();
  return (
    <div>
      <section className="w-full z-50 sticky top-0">
        <Header />
      </section>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
