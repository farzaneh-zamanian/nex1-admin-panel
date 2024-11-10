import Layout from "../../components/layout/Layout";
import "@/styles/globals.scss";
import "@/styles/fonts.css";
import ModalProvider from "../../context/ModalContext";
import TanstackQueryProvider from "../../context/TanstackQueryProvider";

import { Toaster} from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <ModalProvider>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout></ModalProvider>
    </TanstackQueryProvider>
  )
}
