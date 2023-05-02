// defines a wrapper component to be screen height.

import { TContainer } from "@/types/types";
import { ReactElement, ReactNode, useEffect } from "react";
import React from "react";
import Container from "./Container";

type ChildType = ReactElement<TContainer> | ReactElement<TContainer>[]

interface Props{
    children: ChildType
}

const ScreenHeight : React.FC<Props> = ({children}) => {
        
    const childElements = React.Children.map(children, (child) : ChildType => {
        if (child?.type !== Container) {
            throw new Error('Parent component must only have specific children');
        }
        return child
    })
    if (!childElements) {
        throw new Error('Parent component must have a child element');
    }
    if (childElements?.length > 2) {
        throw new Error('Parent component must have no more than 2 children');
    }

    return (
        <section className="min-h-screen h-screen w-full overflow-hidden">
            {childElements}
        </section>
    ) 
}
 
export default ScreenHeight;