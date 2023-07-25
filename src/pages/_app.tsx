import type { AppProps } from "next/app";
import Navbar from "@/components/global/NavBar/Navbar";
import MainPage from "@/components/global/MainPage/MainPage";
import "./globals.css";
import Gradient from "@/components/global/Gradient/Gradient";
import Footer from "@/components/global/Footer/Footer";
import { useEffect, useState } from "react";
import ThemeProvider from "@/components/global/ThemeProvider/ThemeProvider";

const App = ({ Component, pageProps }: AppProps) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  useEffect(() => {
    //query window media to get initial theme
    // if windows exists and 'prefers-color-scheme: dark' matches,
    // initial theme will be dark
    window.matchMedia &&
      setDarkmode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    // while on the runtime, listen the prefers-color-scheme media
    // darkmode theme changes as color scheme changes
    const darkModePreference =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    // recommended method for newer browsers: specify event-type as first argument
    darkModePreference.addEventListener("change", (e) =>
      setDarkmode(e.matches)
    );
    return darkModePreference.removeEventListener("change", (e) =>
      setDarkmode(e.matches)
    );
  }, []);

  return (
    <ThemeProvider darkmode={darkmode}>
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
