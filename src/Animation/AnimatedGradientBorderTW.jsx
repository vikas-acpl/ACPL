import React, { useRef, useEffect } from "react";

export const AnimatedGradientBorderTW = ({ children }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) {
      return;
    }
    const updateAnimation = () => {
      const currentAngle = parseFloat(boxElement.style.getPropertyValue("--angle")) || 0;
      const angle = (currentAngle + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };
    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        "--angle": "0deg",
        "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
        "--bg-color": "linear-gradient(#131219, #131219)",
      }}
      className="amimation"
    //   className="flex h-[400px] w-[400px] items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}
    </div>
  );
};
