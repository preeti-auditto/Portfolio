"use client";

import { motion } from "framer-motion";

export default function DataElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Floating Chart 1: Bar Chart */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 lg:left-32 w-48 h-32 glass rounded-xl border border-white/5 p-4 flex items-end gap-2"
      >
        <motion.div animate={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="w-full bg-white/20 rounded-t-sm"></motion.div>
        <motion.div animate={{ height: ["70%", "30%", "70%"] }} transition={{ duration: 5, repeat: Infinity }} className="w-full bg-white/40 rounded-t-sm"></motion.div>
        <motion.div animate={{ height: ["20%", "90%", "20%"] }} transition={{ duration: 3.5, repeat: Infinity }} className="w-full bg-white/10 rounded-t-sm"></motion.div>
        <motion.div animate={{ height: ["90%", "50%", "90%"] }} transition={{ duration: 6, repeat: Infinity }} className="w-full bg-white/30 rounded-t-sm"></motion.div>
        <div className="absolute top-2 left-3 text-[10px] font-mono text-white/50">KPI_GROWTH.SQL</div>
      </motion.div>

      {/* Floating Chart 2: Line Graph */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-10 lg:right-32 w-56 h-40 glass rounded-xl border border-white/5 p-4 flex flex-col justify-between"
      >
        <div className="text-[10px] font-mono text-white/50">PREDICTIVE_MODEL.PY</div>
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible mt-2">
          <motion.path
            d="M 0 40 Q 20 10 40 30 T 80 20 T 100 5"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle cx="100" cy="5" r="3" fill="rgba(255,255,255,0.8)" 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity }} 
          />
        </svg>
      </motion.div>
      
      {/* Floating Data Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full border-dashed opacity-20"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full opacity-10"
      ></motion.div>
    </div>
  );
}
