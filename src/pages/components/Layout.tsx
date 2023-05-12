import Gradient from "./Gradient";
import style from "./styles/Layout.module.css"

const Layout = ({children}:React.PropsWithChildren) => {
    return (
        <div className={style.layout}>
            <Gradient/>
            {children}
        </div>
    );
}
 
export default Layout;