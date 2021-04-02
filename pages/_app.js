import Layout from "../component/Layout/Layout";
import "../styles/index.css";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;
