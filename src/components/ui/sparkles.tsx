
"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

export interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity
  } = props;
  
  const [stars, setStars] = useState<Array<{ x: number, y: number, size: number, animationDelay: number }>>([]);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    const generateStars = () => {
      const density = particleDensity || 100;
      const newStars = [];
      for (let i = 0; i < density; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: minSize || 1 + Math.random() * ((maxSize || 3) - (minSize || 1)),
          animationDelay: Math.random() * 2
        });
      }
      setStars(newStars);
      controls.start({ opacity: 1, transition: { duration: 1 } });
    };
    
    generateStars();
    
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, [minSize, maxSize, particleDensity, controls]);

  return (
    <motion.div
      animate={controls}
      className={cn("opacity-0", className)}
    >
      <div
        id={id || generatedId}
        className="h-full w-full absolute inset-0"
        style={{ background: background || "transparent" }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: particleColor || "#ffffff",
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${star.animationDelay}s`,
              animation: `star-twinkle ${speed || 4}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
