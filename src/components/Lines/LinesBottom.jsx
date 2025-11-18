import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useResponsiveValue(desktopValue, mobileValue, breakpoint = 768) {
  const [value, setValue] = useState(window.innerWidth > breakpoint ? desktopValue : mobileValue);

  useEffect(() => {
    function handleResize() {
      setValue(window.innerWidth > breakpoint ? desktopValue : mobileValue);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopValue, mobileValue, breakpoint]);

  return value;
}

export default function LinesBottom() {
  const width = 1000;
  const height = useResponsiveValue(200, 120, 768);
  const strokeWidth = useResponsiveValue(2, 4, 768); 
  const count = 6;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="curveMask1">
          {Array.from({ length: count }).map((_, i) => {
            const x = i * (width / (count - 1));
            return (
              <path
                key={i}
                d={`M${x},0 C${x},150 ${width / 2},75 ${width / 2},200`}
                stroke="white"
                strokeWidth={strokeWidth}
                fill="none"
              />
            );
          })}
        </mask>
        <linearGradient id="gradient1" x1="0" x2="0" y1="1" y2="0">
          <motion.stop
            stopColor="rgba(0,0,0,0.5)"
            animate={{ offset: ["100%", "-150%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.stop
            stopColor="transparent"
            animate={{ offset: ["-20%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.stop
            stopColor="#e41f26"
            animate={{ offset: ["-12%", "108%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.stop
            stopColor="rgba(0,0,0,0.5)"
            animate={{ offset: ["-8%", "112%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </linearGradient>
      </defs>
      <g mask="url(#curveMask1)">
        <rect x="0" y="0" width={width} height="200" fill="#626262" />
        <rect x="0" y="0" width={width} height="200" fill="url(#gradient1)" />
      </g>
    </svg>
  );
}
