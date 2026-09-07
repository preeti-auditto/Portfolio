"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function InteractivePortrait() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll parallax for the entire container
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Mouse tracking values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for realistic movement without jumping
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 1 });

  // Map mouse positions to 3D rotations
  const rotateX = useTransform(springY, [0, 1], [15, -15]); // Up/down tilt
  const rotateY = useTransform(springX, [0, 1], [-15, 15]); // Left/right tilt

  // Dynamic highlight based on mouse position
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Smoothly return to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax, perspective: "1000px" }}
      className="relative w-full h-[600px] flex items-center justify-center cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl bg-black/50"
      >
        {/* Layer 1: Background Glow / Shadow */}
        <motion.div
          style={{ transform: "translateZ(-50px)" }}
          className="absolute inset-0 bg-white/5 rounded-2xl blur-3xl opacity-50"
        />

        {/* Layer 2: Main Image (Midground) */}
        <motion.div
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 rounded-2xl overflow-hidden"
        >
          <motion.img
            src="/profile1.jpeg"
            alt="Preeti Auditto Profile"
            className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
          />
        </motion.div>

        {/* Dynamic Lighting Layer (Highlights) */}
        <motion.div
          style={{
            transform: "translateZ(20px)",
            background: useTransform(
              () => `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, rgba(255,255,255,0.15) 0%, transparent 60%)`
            ),
          }}
          className="absolute inset-0 pointer-events-none mix-blend-overlay rounded-2xl"
        />

        
        {/* Foreground Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 rounded-2xl pointer-events-none" style={{ transform: "translateZ(10px)" }}></div>
      </motion.div>
    </motion.div>
  );
}
