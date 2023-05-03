import { useEffect, useState } from "react";
import style from "./styles/Gradient.module.css"


const Gradient = () => {
    
    const [percentage, setPercentage] = useState<number>(0)


    useEffect(() => {
        
        const unsub = () =>{
            let docObj = document?.body?.firstChild?.firstChild as Element 
            let scrollHeight = docObj.scrollHeight;
            let scrollTop = docObj.scrollTop;
            
            setPercentage(
                Math.floor((scrollTop /scrollHeight) * 100)
            )

            console.log(percentage)
        }

        window?.addEventListener("wheel", unsub)
        return () => window?.removeEventListener("wheel", unsub)
    }, [percentage]);
    
     
    return ( 
        <div>
            <div 
            className={style.ball1}
            style={{
                translate:`${-percentage * 4}px ${-percentage * 2}px`,
                scale:`${1 + (percentage/70)}`
            }}
            >
            </div> 
            <div 
            className={style.ball2}
            style={{
                translate: `${percentage * 4}px ${percentage * 4}px`,
                scale:`${1 + (percentage/50)}`
            }}
            >
            </div> 
            <div 
            className={style.ball3}
            style={{
                translate: `${-percentage * 2}px ${-percentage * 3}px`,
                scale:`${1 + (percentage/90)}`
            }}
            >
            </div> 
        </div>
    );
}
 
export default Gradient;