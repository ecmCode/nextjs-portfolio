import { IContainer } from "@/types/interfaces";

const Container : React.FC<IContainer> = ({variant,children}) => {

    const option = () => {
        switch(variant){
            case "1/3" : 
                return 'min-h-[33vh]';
            case "2/3" : 
                return "min-h-[66vh]";
            case "full" :
                return "h-full"
            default: 
                // exhaustive check making sure all options are listed
                // throws compiler error when something is missing 
                const exhaustiveCheck: never = variant;
                return exhaustiveCheck
        }
    }

    return (
        <div className="w-full">
            <div className={`${option()} h-full flex items-start`}>
                <div className="p-4 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default Container;