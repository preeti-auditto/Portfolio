"use client";

import { motion } from "framer-motion";

export default function MetricsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-30">
      {/* Radar Chart Grid */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Concentric Polygons / Circles */}
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${level * 20}%`,
              height: `${level * 20}%`,
            }}
          ></div>
        ))}

        {/* Crosshairs */}
        <div className="absolute w-full h-[1px] bg-white/10 rotate-0"></div>
        <div className="absolute w-full h-[1px] bg-white/10 rotate-45"></div>
        <div className="absolute w-full h-[1px] bg-white/10 rotate-90"></div>
        <div className="absolute w-full h-[1px] bg-white/10 rotate-135"></div>

        {/* Animated Radar Area */}
        <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.polygon
            points="50,10 80,30 90,70 50,90 20,60 30,20"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
            animate={{
              points: [
                "50,10 80,30 90,70 50,90 20,60 30,20",
                "50,20 70,25 95,60 50,85 10,50 40,25",
                "50,5 85,35 85,75 50,95 15,65 25,15",
                "50,10 80,30 90,70 50,90 20,60 30,20",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
        
        {/* Radar Sweep */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-1/2 h-[1px] bg-gradient-to-r from-transparent to-white/30 top-1/2 left-1/2 origin-left"
        ></motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    </div>
  );
}
