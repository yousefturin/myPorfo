"use client";

import { newColors } from "@/styles/Sachem";
import { ease } from "@/utils/motionVariants";
import SvgComponent from "@/utils/SvgComponent";
import { Button } from "app/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ScrollToProjects from "./ScrollToProjects";

export default function HeroSection() {
  return (
    <div
      className=" max-w-1400px  py-120 px-96 flex-row atc jc-sb gap-200 m-auto"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="flex-column atfs flex-05 mob-flex-1"
        style={{ zIndex: 1 }}
      >
        <motion.span
          className="bg-secondary br-4 px-6 py-4 font-family-regular color-ink font-label-small"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          SENIOR MOBILE & FRONTEND ENGINEER
        </motion.span>
        <motion.h1
          className="font-color-ink-inverse font-display-medium font-family-bold mt-56 mob-font-display-small"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.12 }}
        >
          Building Scalable Fintech Infrastructure for 15,000+ Clients.
        </motion.h1>
        <motion.p
          className="font-label-large color-ink-inverse font-family-regular mt-56"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.24 }}
        >
          I specialize in React Native and Next.js high-performance
          architecture. Currently managing the mobile and web payment ecosystem
          for Figensoft (Tiko)
        </motion.p>
        <motion.div
          className="flex-row gap-24 mob-flex-column mt-56 w-100"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.36 }}
        >
          <ScrollToProjects />
          <Button
            title="Github / Open Source"
            btnType="outline"
            iconPosition="left"
            link="https://github.com/yousefturin"
            icon={
              <SvgComponent
                svgKey={"GitHubSVG"}
                width={20}
                height={20}
                fill={newColors["ink-inverse"]}
              />
            }
          />
        </motion.div>
      </div>
      <motion.div
        className="flex-05 atc dsp-f jc-fe mob-absolute mob-opacity-01 mob-inset-0"
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.18 }}
        style={{ zIndex: 0 }}
      >
        <Image
          src={"/images/hero-image.avif"}
          alt={"Hero Image"}
          width={432}
          height={580}
          style={{ width: "100%", height: "auto", maxWidth: 800 }}
          className="br-8 overflow-h mob-object-cover"
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 432px"
        />
      </motion.div>
    </div>
  );
}
