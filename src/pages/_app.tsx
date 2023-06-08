import type { AppProps } from "next/app";
import Navbar from "@/pages/components/NavBar/Navbar";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Navbar />
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </Layout>
  );
};

export default App;
