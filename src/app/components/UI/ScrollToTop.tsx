"use client";

import React from "react";
import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      setVisible(scrollTop > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        display: visible ? "flex" : "none",
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: newColors["ink-inverse"],
        border: "none",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
      className="onHover-scale-105"
    >
      <SvgComponent
        svgKey={"ArrowDown"}
        width={20}
        height={20}
        fill={newColors["ink"]}
        style={{ transform: "rotate(180deg)" }}
      />
    </button>
  );
}
