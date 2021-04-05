import React from "react";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
const Layout = ({children}) => {
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
