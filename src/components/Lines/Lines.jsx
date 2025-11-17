import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useResponsiveHeight(desktop = 200, mobile = 180, breakpoint = 768) {
  const [height, setHeight] = useState(window.innerWidth > breakpoint ? desktop : mobile);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerWidth > breakpoint ? desktop : mobile);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktop, mobile, breakpoint]);

  return height;
}

export default function Lines() {
  const width = 1000;
  const height = useResponsiveHeight(200, 120, 768);
  const count = 6;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="curveMask">
          {Array.from({ length: count }).map((_, i) => {
            const x = i * (width / (count - 1));
            return (
              <path
                key={i}
                d={`M${x},0 C${x},150 ${width / 2},75 ${width / 2},200`}
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            );
          })}
        </mask>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <motion.stop
            stopColor="rgba(0,0,0,0.5)"
            animate={{ offset: ["-150%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            strokeDasharray="60 100"
          />
          <motion.stop
            stopColor="transparent"
            animate={{ offset: ["-20%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            strokeDasharray="60 100"
          />
          <motion.stop
            stopColor="#fff"
            animate={{ offset: ["-12%", "108%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            strokeDasharray="60 100"
          />
          <motion.stop
            stopColor="rgba(0,0,0,0.5)"
            animate={{ offset: ["-8%", "112%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            strokeDasharray="60 100"
          />
        </linearGradient>
      </defs>
      <g mask="url(#curveMask)">
        <rect x="0" y="0" width={width} height="200" fill="#262626" />
        <rect x="0" y="0" width={width} height="200" fill="url(#gradient)" />
      </g>
    </svg>
  );
}
