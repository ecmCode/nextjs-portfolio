import { useEffect, useState } from "react";
import style from "./Gradient.module.css";

/**
 *  Blurred background gradient balls that transform themselves on scroll event
 */
const Gradient = () => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const unsub = () => {
      let docObj = document?.body as Element;
      let scrollHeight = docObj.scrollHeight;
      let scrollTop = window?.scrollY;
      setPercentage(Math.floor((scrollTop / scrollHeight) * 100));
    };

    window?.addEventListener("wheel", unsub);
    return () => window?.removeEventListener("wheel", unsub);
  }, [percentage]);

  return (
    <div className="fixed inset-0">
      <span
        className={style.ball1}
        style={{
          translate: `${-percentage * 4}px ${-percentage * 2}px`,
          scale: `${1 + percentage / 70}`,
        }}
      ></span>
      <span
        className={style.ball2}
        style={{
          translate: `${percentage * 4}px ${percentage * 4}px`,
          scale: `${1 + percentage / 50}`,
        }}
      ></span>
      <span
        className={style.ball3}
        style={{
          translate: `${-percentage * 2}px ${-percentage * 3}px`,
          scale: `${1 + percentage / 90}`,
        }}
      ></span>
      <span
        className={style.ball4}
        style={{
          translate: `${-percentage * 2}px ${-percentage * 3}px`,
          scale: `${1 + percentage / 50}`,
        }}
      ></span>
    </div>
  );
};

export default Gradient;
