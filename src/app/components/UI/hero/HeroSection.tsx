import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";
import { Button } from "app/components/button/Button";
import Image from "next/image";
import React from "react";
import ScrollToProjects from "./ScrollToProjects";
import CopyButton from "app/components/button/CopyButton";

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
        <span className="bg-secondary br-8 px-6 py-4 font-family-regular color-ink font-label-small">
          SENIOR MOBILE & FRONTEND ENGINEER
        </span>
        <h1 className="font-color-ink-inverse font-heading-mlarge font-family-bold mt-56">
          Building Scalable Fintech Infrastructure for 15,000+ Clients.
        </h1>
        <p className="font-label-large color-ink-inverse font-family-regular mt-32">
          I specialize in React Native and Next.js high-performance
          architecture. Currently managing the mobile and web payment ecosystem
          for Figensoft (Tiko)
        </p>
        <div className="flex-column atfs mt-24 mob-show">
          <span className="font-label-medium font-family-bold color-ink-inverse truncate max-w-100">
            Direct Contact
          </span>
          <div className="">
            <CopyButton
              isLoading={false}
              text={"contact@yusefturin.com"}
              variant="DEFAULT"
              textStyle="font-label-medium color-ink-inverse font-family-regular truncate"
            />
          </div>
        </div>
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
      <div
        className="flex-05 atc dsp-f jc-c mob-absolute mob-opacity-01 mob-inset-0"
        style={{ zIndex: 0 }}
      >
        <div className="flex-column gap-24 atfs">
          <SvgComponent
            svgKey="sanalPos"
            className="onHover-scale-105"
            width={223}
            height={64}
          />
          <div className="flex-row gap-16">
            <SvgComponent
              svgKey="lunchCard"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="figensoft"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="azan"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
          </div>
          <div className="flex-row gap-16">
            <SvgComponent
              svgKey="tiko"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="tikoPos"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="ciftic"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
          </div>
          <div className="flex-row gap-16">
            <SvgComponent
              svgKey="LokatoSeller"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="LokatoDriver"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
            <SvgComponent
              svgKey="Resto"
              className="onHover-scale-105"
              width={64}
              height={64}
            />
          </div>
        </div>
        {/* <Image
          src={"/images/test-hero-image.png"}
          alt={"Hero Image"}
          width={432}
          height={580}
          style={{ width: "100%", height: "auto", maxWidth: 300 }}
          className="br-8 overflow-h mob-object-cover"
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 432px"
        /> */}
      </div>
    </div>
  );
}
