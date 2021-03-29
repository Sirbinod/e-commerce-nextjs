import React from "react";
import Header from "../Header/Header";
import MegaMenu from "../MegaMenu/MegaMenu";
import {useRouter} from "next/router";
const Layout = () => {
  const router = useRouter();
  return (
    <div>
      <section className="w-full z-50 sticky top-0">
        <Header />
      </section>
      <section
        className={
          router.pathname == "/" ? "home w-full bg-white" : "w-full bg-white"
        }
      >
        <MegaMenu />
      </section>
    </div>
  );
};

export default Layout;
