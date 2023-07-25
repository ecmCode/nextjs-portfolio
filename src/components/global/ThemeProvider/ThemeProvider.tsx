import { ReactNode } from "react";

const ThemeProvider = ({children,darkmode} : {children: ReactNode,darkmode: boolean}) => {
    
    return (
        <div className={darkmode ? 'dark' : ''}>
            {children}
        </div>
    );
}
 
export default ThemeProvider;