"use client";
import React from "react";
import { motion } from "framer-motion";

const Wave: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none">
      <defs>
        <filter id="inkBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" />
        </filter>
      </defs>
      {Array.from({ length: 1 }).map((_, index) => (
        <motion.path
          key={index}
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="5"
          filter="url(#inkBlur)"
          animate={{
            d: [
              "M 0 250 Q 250 200, 500 250 T 1000 200",
              "M 0 200 Q 250 300, 500 250 T 1000 250",
              "M 0 250 Q 200 150, 500 300 T 1000 250",
              "M 0 300 Q 250 350, 500 200 T 1000 450",
              "M 0 250 Q 300 250, 500 400 T 1000 250",
              "M 0 400 Q 250 200, 500 250 T 1000 250",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

export default Wave;
