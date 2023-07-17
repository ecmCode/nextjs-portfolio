import { useState, useEffect } from "react";

const Suspense = ({
  fallback,
  children,
  delay = 1000,
}: {
  fallback: JSX.Element;
  children: JSX.Element;
  delay?: number;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [children, delay]);

  if (loading) return fallback;
  return children;
};

export default Suspense;
