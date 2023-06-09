import Gradient from "./Gradient/Gradient";
import style from "./BaseLayout.module.css";

const BaseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={style.layout}>
      <Gradient />
      {children}
    </div>
  );
};

export default BaseLayout;
