import SvgComponent, { SvgKey } from "@/utils/SvgComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type OtherWorkCardProps = {
  title: string;
  label: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  url: string;
};
export default function OtherWorkCard({
  title,
  label,
  description,
  image,
  url,
}: OtherWorkCardProps) {
  return (
    <div className="flex-column border-all br-8 px-24 py-16 atc gap-20 min-w-none bg-ink">
      <div className="relative overflow-h br-8 onHover-scale-105">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-cover"
          style={{
            maxWidth: image.width,
            maxHeight: image.height,
          }}
        />
        <div className="absolute-b-rl w-100 h-100 gradient-ink-bottom-100-1"></div>
      </div>
      <div className="flex-column atfs gap-4m max-w-100">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-row atc gap-16 font-label-small color-secondary font-family-bold onHover-underline"
        >
          <span className="font-heading-medium font-family-bold color-ink-inverse truncate max-w-100">
            {title}
          </span>
          <SvgComponent
            className="onHover-scale-105"
            svgKey="ExternalLinkSvg"
            width={22}
            height={22}
          />
        </Link>
        <span className="font-label-small color-ink-inverse font-family-light text-capitalize truncate max-w-100 mt-4">
          {label}
        </span>
        <p className="label-medium color-ink-inverse font-family-regular truncate max-w-100 mt-8">
          {description}
        </p>
      </div>
    </div>
  );
}
