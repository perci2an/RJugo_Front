"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedOnScroll({ children }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    rootMargin: "100px 0px",
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
