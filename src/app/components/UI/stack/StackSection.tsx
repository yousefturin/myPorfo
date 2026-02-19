"use client";

import { StackData } from "@/data/Stack/stack";
import { cardVariant, ease, staggerContainer, viewport } from "@/utils/motionVariants";
import { motion } from "framer-motion";
import StackCard from "./components/StackCard";

export default function StackSection() {
  return (
    <div className="bg-ink-medium w-100">
      <div className="max-w-1400px px-96 py-96 flex-column  m-auto">
        <motion.h2
          className="font-heading-mlarge font-family-bold color-ink-inverse"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={viewport}
        >
          Stack
        </motion.h2>
        <motion.div
          className="grid-cols mt-44 gap-44"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {StackData.slice(0, 4).map((item) => (
            <motion.div key={item.id} variants={cardVariant}>
              <StackCard
                title={item.title}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
          {StackData.slice(4, 8).map((item) => (
            <motion.div key={item.id} variants={cardVariant}>
              <StackCard
                title={item.title}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
