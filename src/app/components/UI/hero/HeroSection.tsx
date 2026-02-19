import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";
import { Button } from "app/components/button/Button";
import Image from "next/image";
import React from "react";
import ScrollToProjects from "./ScrollToProjects";

export default function HeroSection() {
  return (
    <div className=" max-w-1400px  py-120 px-96 flex-row atc jc-sb gap-200 m-auto">
      <div className="flex-column atfs flex-05 mob-flex-1">
        <span className="bg-secondary br-4 px-6 py-4 font-family-regular color-ink font-label-small">
          SENIOR MOBILE & FRONTEND ENGINEER
        </span>
        <h1 className="font-color-ink-inverse font-display-medium font-family-bold mt-56">
          Building Scalable Fintech Infrastructure for 15,000+ Clients.
        </h1>
        <p className="font-label-large color-ink-inverse font-family-regular mt-56">
          I specialize in React Native and Next.js high-performance
          architecture. Currently managing the mobile and web payment ecosystem
          for Figensoft (Tiko)
        </p>
        <div className="flex-row gap-24 mob-flex-column mt-56 w-100">
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
        </div>
      </div>
      <div className="flex-05 flex-05 atc dsp-f jc-fe mob-hide">
        <Image
          src={"/images/hero-image.avif"}
          alt={"Hero Image"}
          width={432}
          height={580}
          style={{ maxWidth: 800 }}
          layout="responsive"
          className="br-8 overflow-h"
          fetchPriority="high"
          lazyBoundary="100px"
        />
      </div>
    </div>
  );
}
