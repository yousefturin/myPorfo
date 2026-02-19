"use client";

import { motion } from "framer-motion";

export default function PulsingCircle() {
  return (
    <motion.div
      className="w-10px h-10px br-9999 bg-brand"
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
