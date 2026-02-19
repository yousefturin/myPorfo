import React from "react";
import FooterSectionClient from "./FooterSectionClient";
import CopyButton from "app/components/button/CopyButton";
import SvgComponent from "@/utils/SvgComponent";
import { newColors } from "@/styles/Sachem";
import PulsingCircle from "./PulsingCircle";

export default function FooterSection() {
  return (
    <div className="bg-ink w-100 relative" style={{ overflow: "hidden" }}>
      <div
        className="max-w-1400px grid-cols-auto jc-sb px-96 py-96 m-auto gap-64 mob-pb-80"
        style={{ paddingBottom: 200 }}
      >
        <FooterSectionClient />
        <div className="flex-column atfs mob-atc">
          <span className="font-heading-medium font-family-bold color-ink-inverse truncate max-w-100">
            Direct Contact
          </span>
          <div className="mt-8">
            <CopyButton
              isLoading={false}
              text={"contact@yusefturin.com"}
              variant="DEFAULT"
              textStyle="font-label-medium color-ink-inverse font-family-regular truncate"
            />
          </div>
          <div className="flex-row gap-8 atc mt-4">
            <PulsingCircle />
            <span className="font-label-medium color-tertiary font-family-regular truncate max-w-100">
              Available for Full-time
            </span>
          </div>
        </div>
        <div className="flex-column atfe mob-atc">
          <p className="font-label-medium color-tertiary font-family-regular truncate max-w-100">
            © {new Date().getFullYear()} Yusefturin.
          </p>
          <div className="flex-row gap-16 mt-16">
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
              className="onHover-scale-105"
            >
              <SvgComponent
                svgKey="LinkedInSGV"
                width={24}
                height={24}
                fill={newColors["ink-inverse"]}
                alt="linkedin icon"
              />
            </a>
            <a
              href="https://medium.com/@yusefturin"
              target="_blank"
              rel="noopener noreferrer"
              title="medium link"
              className="onHover-scale-105"
            >
              <SvgComponent
                svgKey="MediumSvg"
                width={24}
                height={24}
                fill={newColors["ink-inverse"]}
                alt="medium icon"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/19291323/yusefturin"
              target="_blank"
              rel="noopener noreferrer"
              title="stack over flow link"
              className="onHover-scale-105"
            >
              <SvgComponent
                svgKey="StackOverFlowSvg"
                width={24}
                height={24}
                fill={newColors["ink-inverse"]}
                alt="stack over flow icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "clamp(48px, 15vw, 249px)",
          lineHeight: 0.8,
          color: newColors["ink-inverse"],
          position: "absolute",
          bottom: "clamp(-30px, -4vw, -70px)",
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "ProximaNova-Bold",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        YusefTurin
      </div>
    </div>
  );
}
