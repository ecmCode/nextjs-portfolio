import style from "./MainPage.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainPage = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={inter.className}>
      <div className={style.mainPage}>{children}</div>
    </div>
  );
};

export default MainPage;
