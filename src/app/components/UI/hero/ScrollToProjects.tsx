"use client";

import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";
import { Button } from "app/components/button/Button";

export default function ScrollToProjects() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      title="View Selected Work"
      iconPosition="right"
      onPress={scrollToProjects}
      icon={
        <SvgComponent
          svgKey={"ArrowDown"}
          width={20}
          height={20}
          fill={newColors["ink"]}
        />
      }
    />
  );
}
