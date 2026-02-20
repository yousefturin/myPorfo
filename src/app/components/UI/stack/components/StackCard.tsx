import SvgComponent, { SvgKey } from "@/utils/SvgComponent";
import React from "react";

export type StackCardProps = {
  title: string;
  label: string;
  description: string;
  icon: SvgKey;
};
export default function StackCard({
  title,
  label,
  description,
  icon,
}: StackCardProps) {
  return (
    <div className="border-all br-12 bg-ink px-24 py-16 flex-row atc  gap-20 shrink-0 max-w-280px">
      <SvgComponent
        svgKey={icon}
        width={44}
        height={44}
        className="mob-hide-600"
      />
      <div className="flex-column atfs gap-4m max-w-100">
        <span className="font-label-xsmall color-secondary font-family-light text-capitalize truncate max-w-100">
          {label}
        </span>
        <span className="font-label-large font-family-bold color-ink-inverse truncate max-w-100">
          {title}
        </span>
        <p className="font-label-xsmall color-tertiary font-family-regular truncate max-w-100">
          {description}
        </p>
      </div>
    </div>
  );
}
