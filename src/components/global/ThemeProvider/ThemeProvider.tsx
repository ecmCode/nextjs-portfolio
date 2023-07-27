import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const ThemeProvider = ({
  children,
  darkmode,
  setDarkmode,
}: {
  children: ReactNode;
  darkmode: boolean | null;
  setDarkmode: Dispatch<SetStateAction<boolean | null>>;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    // when the page is loaded, check if system prefers dark color scheme,
    // then set localStorage item  based on the result

    window.matchMedia &&
      setDarkmode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [setDarkmode]);

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode ? "true" : "false");
  }, [darkmode]);

  useEffect(() => {
    //if darkmode value changes, the page can be loaded
    setLoaded(true);
  }, [darkmode]);

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
  }, [setDarkmode]);

  return <div className={darkmode ? "dark" : ""}>{loaded && children}</div>;
};

export default ThemeProvider;
