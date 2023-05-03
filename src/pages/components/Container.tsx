// defines a containe component to be children of parent ScreenHeight element 
// and have max 2 components in each parent element.

import { TContainer } from "@/types/interfaces";

const Container : React.FC<TContainer> = ({variant,children}) => {

    let className;

    switch(variant){
        case "1/3" : 
            className = 'min-h-[33vh]';
            break;
        case "2/3" : 
            className = "min-h-[66vh]";
            break;
        case "full" :
            className = "h-full"
            break;
        default: 
            return variant;
    }
    
    return (
        <div className="w-full">
            <div className={className}>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default Container;