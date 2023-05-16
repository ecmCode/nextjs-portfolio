import style from "./styles/MainPage.module.css"

const MainPage = ({children}: React.PropsWithChildren) => {
    return ( 
        <div className={style.mainPage} id="top">
            {children}
        </div>
    );
}
 
export default MainPage;