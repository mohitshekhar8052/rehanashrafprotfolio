import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

const AnimatedBorder = ({ children, className = "" }: AnimatedBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated rotating gradient border */}
      <motion.div
        className="absolute -inset-1 rounded-full opacity-75 blur-sm"
        style={{
          background: "conic-gradient(from 0deg, hsl(174 72% 50%), hsl(280 70% 60%), hsl(200 80% 55%), hsl(174 72% 50%))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-primary/20 blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Inner container */}
      <div className="relative rounded-full p-1 bg-background">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
