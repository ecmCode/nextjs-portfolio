import type { AppProps } from "next/app";
import Navbar from "@/pages/components/NavBar/Navbar";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import MainPage from "./components/MainPage/MainPage";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
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
