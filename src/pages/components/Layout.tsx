const Layout = ({children}:React.PropsWithChildren) => {
    return (
        <div className="h-screen w-screen overflow-auto">
            {children}
        </div>
    );
}
 
export default Layout;