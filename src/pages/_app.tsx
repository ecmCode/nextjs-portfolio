import type { AppProps } from "next/app";
import Navbar from "@/components/global/NavBar/Navbar";
import MainPage from "@/components/global/MainPage/MainPage";
import "./globals.css";
import Gradient from "@/components/global/Gradient/Gradient";
import Footer from "@/components/global/Footer/Footer";
import { useEffect, useState } from "react";
import ThemeProvider from "@/components/global/ThemeProvider/ThemeProvider";

const App = ({ Component, pageProps }: AppProps) => {
  const [darkmode, setDarkmode] = useState<boolean | null>(null);

  return (
    <ThemeProvider darkmode={darkmode} setDarkmode={setDarkmode}>
      <Gradient />
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      <MainPage>
        <Component {...pageProps} />
        <Footer />
      </MainPage>
    </ThemeProvider>
  );
};

export default App;
