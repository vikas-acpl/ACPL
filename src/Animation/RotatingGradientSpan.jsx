import React, { useRef, useEffect } from "react";

export const RotatingGradientSpan = ({ thickness = 2, color = "#687aff", children }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const elem = spanRef.current;
    if (!elem) return;

    let angle = 0;
    const animate = () => {
      angle = (angle + 0.5) % 360;
      elem.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <span
      ref={spanRef}
      style={{
        "--angle": "0deg",
        "--thickness": `${thickness}px`,
        "--color": color,
        display: "inline-block",
        position: "relative",
        padding: "4px 12px",
        borderRadius: "55px",
        backgroundImage: `conic-gradient(from var(--angle), transparent, var(--color), transparent)`,
        backgroundSize: "cover",
        border: "none",
      }}
    >
      {children}
    </span>
  );
};
