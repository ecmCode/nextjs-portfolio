import type { AppProps } from "next/app";
import Navbar from "@/pages/components/NavBar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import "./globals.css";
import Gradient from "./components/Gradient/Gradient";

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
