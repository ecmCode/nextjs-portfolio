import type { AppProps } from "next/app";
import Navbar from "@/components/home/NavBar/Navbar";
import MainPage from "@/components/home/MainPage/MainPage";
import "./globals.css";
import Gradient from "@/components/home/Gradient/Gradient";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Gradient />
      <Navbar />
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </>
  );
};

export default App;
