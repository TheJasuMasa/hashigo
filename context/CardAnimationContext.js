import { createContext, useState, useEffect } from "react";

const CardAnimationContext = createContext({});

export const CardAnimationProvider = ({ children }) => {
  const faceVariants = {
    hide: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
  };

  const cardVariants = {
    rotateLeftFirst: {
      rotateY: [0, 90],
      scale: [1, 1.1],
      //   translateX: [-50, 0, 50],
      transition: {
        duration: 0.25,
      },
    },
    rotateLeftSecond: {
      rotateY: [90, 0],
      scale: [1, 1.1],
      transition: {
        duration: 0.25,
      },
    },
    rotateRightFirst: {
      rotateY: [0, 90],
      scale: [1.1, 1],
      transition: {
        duration: 0.25,
      },
    },
    rotateRightSecond: {
      rotateY: [-90, 0],
      scale: [1.1, 1],
      transition: {
        duration: 0.25,
      },
    },
  };

  const cardControl = useAnimation();
  const frontControl = useAnimation();
  const backControl = useAnimation();

  return (
    <CardAnimationContext.Provider value={{}}>
      {children}
    </CardAnimationContext.Provider>
  );
};

export default CardAnimationContext;
