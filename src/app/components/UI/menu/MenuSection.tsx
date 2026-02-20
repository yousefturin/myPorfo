"use client";

import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useScrollCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 80) {
        setIsCollapsed(false);
      } else if (Math.abs(scrollY - lastScrollY) >= 4) {
        setIsCollapsed(scrollY > lastScrollY);
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isCollapsed;
}

const LAYOUT_EASE = { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const };

export default function MenuSection() {
  const isCollapsed = useScrollCollapse();

  return (
    <motion.div
      className="pos-fixed z-999999"
      style={{ top: "2rem" }}
      animate={{
        left: isCollapsed ? "2rem" : "50%",
        x: isCollapsed ? "0%" : "-50%",
      }}
      transition={LAYOUT_EASE}
    >
      <motion.div
        layout
        className="blur-4 bg-ink-60 border-all"
        style={{ borderRadius: 12, overflow: "hidden" }}
        transition={{ layout: LAYOUT_EASE }}
      >
        <motion.div
          layout
          id="menu-section"
          className="p-12 flex-row atc"
          transition={{ layout: LAYOUT_EASE }}
        >
          <motion.div layout style={{ flexShrink: 0 }}>
            <Link href="#hero-section" className="atc">
              <SvgComponent
                svgKey="AppLogo"
                width={38}
                height={34}
                alt="app logo"
              />
            </Link>
          </motion.div>

          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                key="nav"
                className="flex-row gap-32 atc"
                initial={{ opacity: 0, marginLeft: 0 }}
                animate={{
                  opacity: 1,
                  marginLeft: 32,
                  transition: { delay: 0.25, duration: 0.2 },
                }}
                exit={{ opacity: 0, marginLeft: 0, transition: { duration: 0.12 } }}
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <Link
                  href="#projects-section"
                  className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
                >
                  Case Studies
                </Link>
                <Link
                  href="#work-section"
                  className="font-label-medium mob-hide color-ink-inverse font-family-regular onHover-underline"
                >
                  Work
                </Link>
                <Link
                  href="#stack-section"
                  className="font-label-medium mob-hide color-ink-inverse font-family-regular onHover-underline"
                >
                  Stack
                </Link>
                <Link
                  href="#contact-section"
                  className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
                >
                  Contact
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                key="social"
                className="flex-row gap-32"
                initial={{ opacity: 0, marginLeft: 0 }}
                animate={{
                  opacity: 1,
                  marginLeft: 32,
                  transition: { delay: 0.25, duration: 0.2 },
                }}
                exit={{ opacity: 0, marginLeft: 0, transition: { duration: 0.12 } }}
                style={{ overflow: "hidden", flexShrink: 0 }}
              >
                <a
                  href="https://github.com/yousefturin"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="github link"
                  className="onHover-scale-105"
                >
                  <SvgComponent
                    svgKey="GitHubSVG"
                    width={24}
                    height={24}
                    fill={newColors["ink-inverse"]}
                    alt="github icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/yusefturin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="linkedin link"
                  className="onHover-scale-105 mob-hide"
                >
                  <SvgComponent
                    svgKey="LinkedInSGV"
                    width={24}
                    height={24}
                    fill={newColors["ink-inverse"]}
                    alt="linkedin icon"
                  />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
