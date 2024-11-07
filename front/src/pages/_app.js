import Layout from "../../components/layout/Layout";
import "@/styles/globals.scss";
import "@/styles/fonts.css";
import ModalProvider from "../../context/ModalContext";

export default function App({ Component, pageProps }) {
  return (<ModalProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout></ModalProvider>

  )

}
