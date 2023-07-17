import { useEffect, useState } from "react";

const ErrorBoundary = ({
  fallback,
  children,
}: {
  fallback: JSX.Element;
  children: JSX.Element;
}) => {
    const [error, setError] = useState(false);
    
    useEffect(() => {
      if(!children){
        setError(true)
      }
    }, [children]);
    
    if(error) return fallback
    return children
};

export default ErrorBoundary;
