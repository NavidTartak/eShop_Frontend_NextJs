import Layout from "@/components/layout/Layout";
import { Store, persistor } from "@/redux/Store";
import "@/styles/globals.css";
import IranSans from "@/utilities/fonts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/components/global/Loader";
import GlobalHead from "@/components/global/GlobalHead";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <PersistGate
        loading={
          <>
            <GlobalHead />
            <Loader />
          </>
        }
        persistor={persistor}
      >
        <main className={IranSans}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PersistGate>
    </Provider>
  );
}
