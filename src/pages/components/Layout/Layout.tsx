import Gradient from "../Gradient/Gradient";
import style from "./Layout.module.css"

const Layout = ({children}:React.PropsWithChildren) => {
    return (
        <div className={style.layout}>
            <Gradient/>
            {children}
        </div>
    );
}
 
export default Layout;