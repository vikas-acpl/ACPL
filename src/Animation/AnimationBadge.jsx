import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export default function AnimationBadge({ children }) {
  const divRef = useRef(null);
  const rectRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!divRef.current) return;
    const { width, height } = divRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  useEffect(() => {
    if (!rectRef.current || dimensions.width === 0) return;

    const padding = 12;
    const width = dimensions.width + padding;
    const height = dimensions.height + padding-8;
    const perimeter = 2 * (width + height);

    // Reset strokeDashoffset before animating
    rectRef.current.style.strokeDashoffset = 0;

    // Animate strokeDashoffset infinitely for continuous loop
    gsap.to(rectRef.current, {
      strokeDashoffset: -perimeter,
      duration: 5,
      ease: "none", // smooth linear movement
      repeat: -1,
      modifiers: {
        strokeDashoffset: value => `${parseFloat(value) % perimeter}`,
      },
    });
  }, [dimensions]);

  const padding = 12;
  const radius = 28;
  const width = dimensions.width + padding;
  const height = dimensions.height + padding-8;
  const perimeter = 2 * (width + height);

  return (
    <div ref={divRef} style={{ display: "inline-block", position: "relative" }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          borderRadius:"55px",
          background: "linear-gradient(90deg, #6D0005 14.9%, #D3000A 100%)"
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter
            id="neon"
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#d3000a" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#d3000a" floodOpacity="0.6" />
          </filter>
        </defs>
        <rect
          ref={rectRef}
          x={0}
          y={0}
          width={width}
          height={height}
          rx={radius}
          ry={radius}
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray={`${perimeter * 0.25} ${perimeter * 0.75}`}
          fill="none"
          filter="url(#neon)"
        />
      </svg>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}


  // import { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";

// export default function AnimationBadge({ children }) {
//   const divRef = useRef(null);
//   const svgRef = useRef(null);
//   const rectRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!divRef.current) return;
//     const { width, height } = divRef.current.getBoundingClientRect();
//     setDimensions({ width, height });
//   }, []);

//   useEffect(() => {
//     if (!rectRef.current || dimensions.width === 0) return;

//     const padding = 12;
//     const width = dimensions.width + padding;
//     const height = dimensions.height + padding;

//     // Calculate the perimeter for the animation
//     const perimeter = 2 * (width + height);

//     // Animate stroke dashoffset to create the gradient flowing effect
//     gsap.to(rectRef.current, {
//       strokeDashoffset: -perimeter,
//       duration: 3,
//       ease: "ease",
//       repeat: -1,
//       immediateRender: false,
//     });
//   }, [dimensions]);

//   const padding = 12;
//   const radius = 24;
//   const width = dimensions.width + padding;
//   const height = dimensions.height + padding;
//   const perimeter = 2 * (width + height);

//   return (
//     <div ref={divRef} style={{ display: "inline-block", position: "relative" }}>
//       <svg
//         ref={svgRef}
//         width={dimensions.width + padding * 2-16}
//         height={dimensions.height - padding * 2}
//         viewBox={`0 0 ${dimensions.width + padding * 2-16} ${
//           dimensions.height - padding * 2
//         }`}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           pointerEvents: "none",
//           borderRadius:"55.68px",
//           background: "linear-gradient(90deg, #6D0005 14.9%, #D3000A 100%)"
//         }}
//       >
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#ffffff" />
//             <stop offset="50%" stopColor="#ffffff" />
//             <stop offset="100%" stopColor="#ffffff" />
//           </linearGradient>

//           <filter
//             id="neon"
//             x="0"
//             y="0"
//             width="100%"
//             height="100%"
//             colorInterpolationFilters="sRGB"
//           >
//             <feDropShadow
//               dx="0"
//               dy="0"
//               stdDeviation="5"
//               floodColor="#d3000a"
//               floodOpacity="0.8"
//             />
//             <feDropShadow
//               dx="0"
//               dy="0"
//               stdDeviation="10"
//               floodColor="#d3000a"
//               floodOpacity="0.6"
//             />
//           </filter>
//         </defs>

//         <rect
//           ref={rectRef}
//           x={0}
//           y={0}
//           width={dimensions.width + padding * 2-16}
//           height={dimensions.height - padding * 2}
//           rx={radius}
//           ry={radius}
//           stroke="url(#gradient)"
//           strokeWidth="2"
//           strokeDasharray={`${perimeter * 0.25} ${perimeter * 0.75}`}
//           fill="none"
//           filter="url(#neon)"
//         />
//       </svg>

//       <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
//     </div>
//   );
// }
