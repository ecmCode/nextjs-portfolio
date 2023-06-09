import type { AppProps } from "next/app";
import Navbar from "@/pages/components/NavBar/Navbar";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import MainPage from "./components/MainPage/MainPage";
import "./globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <BaseLayout>
      <Navbar />
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </BaseLayout>
  );
};

export default App;
