import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  offset?: [string, string];
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export function useParallax(options: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { offset = ["start end", "end start"], inputRange = [0, 1], outputRange = [-50, 50] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, inputRange, outputRange);

  return { ref, y, scrollYProgress };
}

export function useParallaxSimple(): { scrollY: MotionValue<number> } {
  const { scrollY } = useScroll();
  return { scrollY };
}
