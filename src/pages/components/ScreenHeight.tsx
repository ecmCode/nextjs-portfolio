// defines a wrapper component to be screen height.

import { ReactElement, ReactNode, useEffect } from "react";
import React from "react";
import Container from "./Container";
import { TContainer } from "@/types/interfaces";

type ChildType = ReactElement<TContainer> | ReactElement<TContainer>[]

interface Props{
    children: ChildType
}

const ScreenHeight : React.FC<Props> = ({children}) => {
        
    const childElements = React.Children.map(children, (child) : ChildType | null => {
        if (child?.type !== Container) {
            console.error('Parent component must only have specific children');
            return null
        }
        return child
    })
    if (!childElements) {
        console.error('Parent component must have a child element');
        return null
    }
    if (childElements?.length > 2) {
        console.error('Parent component must have no more than 2 children');
        return null
    }

    return ( 
        <section className="h-screen w-full">
            {childElements}
        </section>
    ) 
}
 
export default ScreenHeight;