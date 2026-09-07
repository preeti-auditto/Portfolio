"use client";

import { motion } from "framer-motion";

export default function DataNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {/* Abstract Node Network */}
      <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        {/* Connection Lines */}
        <motion.path
          d="M 100 200 L 300 150 L 500 300 L 700 100 L 900 250"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        />
        <motion.path
          d="M 200 400 L 400 350 L 600 500 L 800 300"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatType: "reverse", delay: 1 }}
        />
        <path d="M 300 150 L 400 350" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <path d="M 500 300 L 600 500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <path d="M 700 100 L 800 300" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* Nodes */}
        {[
          { x: 100, y: 200, r: 3 },
          { x: 300, y: 150, r: 5 },
          { x: 500, y: 300, r: 4 },
          { x: 700, y: 100, r: 6 },
          { x: 900, y: 250, r: 3 },
          { x: 200, y: 400, r: 4 },
          { x: 400, y: 350, r: 5 },
          { x: 600, y: 500, r: 3 },
          { x: 800, y: 300, r: 6 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={node.r} fill="rgba(255,255,255,0.8)" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 4}
              fill="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>
      
      {/* Background Gradient to blend with section */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
    </div>
  );
}
