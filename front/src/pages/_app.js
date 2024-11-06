import Layout from "../../components/layout/Layout";
import "@/styles/globals.scss";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (<Layout>
    <Component {...pageProps} />
  </Layout>)

}
