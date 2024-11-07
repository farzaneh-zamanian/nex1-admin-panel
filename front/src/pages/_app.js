import Layout from "../../components/layout/Layout";
import "@/styles/globals.scss";
import "@/styles/fonts.css";
import ModalProvider from "../../context/ModalContext";
import TanstackQueryProvider from "../../context/TanstackQueryProvider";

export default function App({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout></ModalProvider>
    </TanstackQueryProvider>
  )
}
