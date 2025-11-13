import { motion } from "framer-motion";

export default function LinesBottom() {
  const width = 1000;
  const height = 200;
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
                strokeWidth="2"
                fill="none"
              />
            );
          })}
        </mask>
        <linearGradient id="gradient1" x1="0" x2="0" y1="1" y2="0">
          <motion.stop
            stopColor="rgba(0,0,0,0.5)"
            animate={{ offset: ["100%", "-150%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5}}
          />
          <motion.stop
            stopColor="transparent"
            animate={{ offset: ["-20%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5}}
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
        <rect x="0" y="0" width={width} height={height} fill="#262626" />
        <rect x="0" y="0" width={width} height={height} fill="url(#gradient1)" />
      </g>
    </svg>
  );
}
