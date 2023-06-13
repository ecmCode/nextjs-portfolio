import Gradient from "./Gradient/Gradient";
import style from "./BaseLayout.module.css";
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"] , weight: ["100","200","300","400","500","600","700","800","900"]})

const BaseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={inter.className}>
      <div className={style.layout}>
        <Gradient />
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
