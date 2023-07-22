// Gradient balls on blurred background
// The balls will scale and move as the user scrolls

import { useEffect, useState } from "react";
import style from "./Gradient.module.css";
import { useRouter } from "next/router";
import { classes } from "@/utility/classes";

const Gradient = () => {

  const [percentage, setPercentage] = useState<number>(0);
  const router = useRouter(); // setPercentage fires as pathname changes

  useEffect(() => {
    const unsub = () => {
      // Query the document body for total scroll height
      let body = document?.body as Element;
      let scrollHeight = body.scrollHeight; // total scroll height
      let scrollTop = window?.scrollY; // browser scroll height
      // Get the percentage of total scroll height and browser scroll height
      setPercentage(Math.floor((scrollTop / scrollHeight) * 100));
    };
    window?.addEventListener("wheel", unsub);
    return () => {
      // Fires the func once before removeEventListener
      unsub();
      window?.removeEventListener("wheel", unsub);
    };
  }, [percentage, router.pathname]);

  // ball with animations and styles applied to each
  const balls = [
    {
      style: style.ball1,
      translate: { X: -4, Y: -2 },
      scale: 70,
    },
    {
      style: style.ball2,
      translate: { X: 4, Y: 4 },
      scale: 50,
    },
    {
      style: style.ball3,
      translate: { X: -2, Y: -3 },
      scale: 90,
    },
    {
      style: style.ball4,
      translate: { X: -2, Y: -3 },
      scale: 50,
    },
  ];

  return (
    <div className="fixed inset-0">
      {balls.map((ball, index) => {
        return (
          <span
            key={index}
            className={classes(style.ball, ball.style)}
            style={{
              translate: `${percentage * ball.translate.X}px ${
                percentage * ball.translate.Y
              }px`,
              scale: `${1 + percentage / ball.scale}`,
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default Gradient;
