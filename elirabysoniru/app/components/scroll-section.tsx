"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
  fadeRange?: [number, number];
  slideOffsetY?: number;
};

export default function ScrollSection({
  id,
  className,
  children,
  as = "section",
  fadeRange = [0.6, 0.9],
  slideOffsetY = 32,
}: ScrollSectionProps) {
  const targetRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, fadeRange, [1, 0]);

  const inView = useInView(targetRef, {
    amount: 0.2,
    once: true,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const MotionTag = as === "div" ? motion.div : motion.section;

  return (
    <MotionTag
      id={id}
      ref={targetRef as never}
      style={mounted ? { opacity } : undefined}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: slideOffsetY }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionTag>
  );
}
