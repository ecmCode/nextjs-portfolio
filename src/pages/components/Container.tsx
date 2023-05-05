import { IContainer } from "@/types/interfaces";

const Container : React.FC<IContainer> = ({variant,children}) => {

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
            // exhaustive check making sure all options are listed
            // throws compiler error when something is missing 
            const exhaustiveCheck: never = variant;
            return exhaustiveCheck
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