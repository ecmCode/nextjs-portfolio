const Layout = ({children}:React.PropsWithChildren) => {
    return (
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden">
            {children}
        </div>
    );
}
 
export default Layout;