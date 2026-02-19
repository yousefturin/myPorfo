import { newColors } from "@/styles/Sachem";
import SvgComponent from "@/utils/SvgComponent";
import Link from "next/link";
import React from "react";

export default function MenuSection() {
  return (
    <div className="dsp-f atc jc-c pos-fixed right-0 left-0 z-999999">
      <div className="max-w-1400px mx-96 my-32 blur-4 br-12 z-999999 bg-ink-60  border-all">
        <div
          id="menu-section"
          className="max-w-1400px p-12 gap-32 flex-row atc jc-sb"
        >
          <Link href="#" className="atc">
            <SvgComponent
              svgKey="AppLogo"
              width={38}
              height={34}
              alt="app logo"
            />
          </Link>

          <div className="flex-row gap-32 atc">
            <Link
              href="#projects-section"
              className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
            >
              Case Studies
            </Link>
            <Link
              href="#work-section"
              className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
            >
              Work
            </Link>
            <Link
              href="#stack-section"
              className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
            >
              Stack
            </Link>
            <Link
              href="#contact-section"
              className="font-label-medium color-ink-inverse font-family-regular onHover-underline"
            >
              Contact
            </Link>
          </div>
          <div className="flex-row gap-32">
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
          </div>
        </div>
      </div>
    </div>
  );
}
