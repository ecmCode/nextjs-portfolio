import Gradient from "./Gradient";

const Layout = ({children}:React.PropsWithChildren) => {
    return (
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden">
            <Gradient/>
            {children}
        </div>
    );
}
 
export default Layout;