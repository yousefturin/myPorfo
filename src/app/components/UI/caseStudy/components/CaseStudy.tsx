import { parseRichText } from "@/utils/parseRichText";
import SvgComponent, { SvgKey } from "@/utils/SvgComponent";
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
      <span className="font-label-large color-ink-inverse font-family-light text-capitalize">
        Project .{projectNumber}
      </span>
      <div
        className={`${imageFromLeft ? "flex-row" : "flex-row-reverse"} gap-96 mob-flex-column mt-32 atc`}
      >
        <div style={{ maxWidth: image.width, width: "100%" }}>
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
        </div>
        <div className="flex-column atfs gap-24 max-w-600px">
          <div>
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
          </div>

          <div className="mt-8">
            <span className="font-label-small color-ink-inverse font-family-light text-capitalize">
              {role}
            </span>
            <div className="flex-row gap-16 mt-8">
              {flags.map((flag, index) => (
                <SvgComponent
                  key={index}
                  svgKey={flag}
                  width={22}
                  height={22}
                />
              ))}
            </div>
          </div>

          <div className="mt-32">
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
          </div>

          <div className="mt-32">
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
          </div>

          <div className="mt-32">
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
          </div>

          <div className="mt-32">
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
          </div>
        </div>
      </div>
    </div>
  );
}
