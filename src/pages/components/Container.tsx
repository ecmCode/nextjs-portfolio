// defines a containe component to be children of parent ScreenHeight element 
// and have max 2 components in each parent element.

import { TContainer } from "@/types/interfaces";

const Container : React.FC<TContainer> = ({variant,children}) => {

    let className;

    switch(variant){
        case "1/3" : 
            className = 'h-1/3';
            break;
        case "2/3" : 
            className = "h-2/3";
            break;
        case "full" :
            className = "h-full"
            break;
        default: 
            return variant;
    }
    
    return (
        <div
        className={className}
        >
            {children}
        </div>
    );
}
 
export default Container;