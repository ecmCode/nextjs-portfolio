import type { AppProps } from "next/app";
import Navbar from "@/components/global/NavBar/Navbar";
import MainPage from "@/components/global/MainPage/MainPage";
import "./globals.css";
import Gradient from "@/components/global/Gradient/Gradient";
import Footer from "@/components/global/Footer/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Gradient />
      <Navbar />
      <MainPage>
        <Component {...pageProps} />
        <Footer />
      </MainPage>
    </>
  );
};

export default App;
