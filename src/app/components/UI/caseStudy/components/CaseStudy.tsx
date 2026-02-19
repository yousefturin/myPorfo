"use client";

import { parseRichText } from "@/utils/parseRichText";
import { ease, viewport } from "@/utils/motionVariants";
import SvgComponent, { SvgKey } from "@/utils/SvgComponent";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type CaseStudyProps = {
  title: string;
  url: string;
  projectNumber: string;
  imgPosition?: "LEFT" | "RIGHT";
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  role: string;
  flags: SvgKey[];
  technicalChallenges: string[];
  architecture: string[];
  outcome: string[];
  stack: string[];
};

const contentStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const contentItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function CaseStudy({
  title,
  projectNumber,
  imgPosition = "LEFT",
  url,
  image,
  role,
  flags,
  technicalChallenges,
  architecture,
  outcome,
  stack,
}: CaseStudyProps) {
  const imageFromLeft = imgPosition === "LEFT";

  return (
    <div className="flex-column mt-64">
      <motion.span
        className="font-label-large color-ink-inverse font-family-light text-capitalize"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={viewport}
      >
        Project .{projectNumber}
      </motion.span>
      <div
        className={`${imageFromLeft ? "flex-row" : "flex-row-reverse"} gap-96 mob-flex-column mt-32 atc`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease }}
          viewport={viewport}
          style={{ maxWidth: image.width, width: "100%" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout="responsive"
            className="object-cover"
            style={{
              maxHeight: image.height,
              maxWidth: image.width,
            }}
          />
        </motion.div>
        <motion.div
          className="flex-column atfs gap-24 max-w-600px"
          variants={contentStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={contentItem}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-row atc gap-16 font-label-small color-secondary font-family-bold onHover-underline"
            >
              <h2 className="font-heading-medium font-family-bold color-ink-inverse">
                {title}
              </h2>
              <SvgComponent
                className="onHover-scale-105"
                svgKey="ExternalLinkSvg"
                width={24}
                height={24}
              />
            </Link>
          </motion.div>

          <motion.div className="mt-8" variants={contentItem}>
            <span className="font-label-small color-ink-inverse font-family-light text-capitalize">
              {role}
            </span>
            <div className="flex-row gap-16 mt-8">
              {flags.map((flag, index) => (
                <SvgComponent key={index} svgKey={flag} width={22} height={22} />
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-32" variants={contentItem}>
            <h3 className="font-label-medium font-family-bold color-ink-inverse">
              The Technical Challenge
            </h3>
            {technicalChallenges.map((challenge, index) => (
              <p
                key={index}
                className="font-label-medium color-ink-inverse font-family-regular mt-16"
              >
                {parseRichText(challenge)}
              </p>
            ))}
          </motion.div>

          <motion.div className="mt-32" variants={contentItem}>
            <h3 className="font-label-medium font-family-bold color-ink-inverse">
              Architecture & Strategy
            </h3>
            <ul className="disc pl-24">
              {architecture.map((challenge, index) => (
                <li
                  key={index}
                  className="font-label-medium color-ink-inverse font-family-regular mt-16"
                >
                  {parseRichText(challenge)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="mt-32" variants={contentItem}>
            <h3 className="font-label-medium font-family-bold color-ink-inverse">
              Key Engineering Wins
            </h3>
            <ul className="disc pl-24">
              {outcome.map((challenge, index) => (
                <li
                  key={index}
                  className="font-label-medium color-ink-inverse font-family-regular mt-16"
                >
                  {parseRichText(challenge)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="mt-32" variants={contentItem}>
            <h3 className="font-label-medium font-family-bold color-ink-inverse">
              Tech Stack
            </h3>
            <div className="flex-row wrap gap-16 overflow-x-a">
              {stack.map((tech, index) => (
                <div
                  key={index}
                  className="mt-16 br-9999 bg-ink-inverse px-8 py-4 shrink-0"
                >
                  <p className="font-label-xsmall color-ink font-family-regular truncate text-algin-center">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
