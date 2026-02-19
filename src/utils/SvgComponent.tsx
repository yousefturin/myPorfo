//@ts-check

/*
 * Copyright (c) 2023 Yusef Rayyan
 *
 * This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
 */

import svgData from "@/assets/svg/SvgStorage";
import React, { JSX } from "react";
import SvgXml from "react-inlinesvg";

const allSvgs = { ...svgData };

export type SvgKey = keyof typeof allSvgs;

type CommonProps = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
  alt?: string;
};

type Size = { width: number | string; height: number | string };
type SizeOptional = { width?: number | string; height?: number | string };

// When svgKey is used, width and height must be provided
export type KeyProps = CommonProps &
  Size & { svgKey: keyof typeof allSvgs; svgXml?: never };
// When svgXml is used, width/height are optional
export type XmlProps = CommonProps &
  SizeOptional & { svgXml: string; svgKey?: never };
export type SvgComponentProps = KeyProps | XmlProps;

export default function SvgComponent(
  props: SvgComponentProps,
): JSX.Element | null {
  // destructure shared props; svgXml or svgKey will exist depending on the union
  const { width, height, fill, stroke, strokeWidth, style, className, alt } =
    props as CommonProps & (Size | SizeOptional);
  // Get svg markup either by key or directly from props
  const svgXml = (props as XmlProps).svgXml;
  // Prefer raw svgXml when provided, otherwise lookup by key
  // props is a discriminated union so either svgXml or svgKey is present
  const svgMarkup =
    svgXml ??
    ((props as KeyProps).svgKey
      ? allSvgs[(props as KeyProps).svgKey]
      : undefined);
  if (!svgMarkup) return null;

  // Only pass props that are defined - SvgXml accepts optional width/height
  const svgProps: Record<string, unknown> = {};
  if (width !== undefined) svgProps.width = width;
  if (height !== undefined) svgProps.height = height;
  if (fill !== undefined) svgProps.fill = fill;
  if (stroke !== undefined) svgProps.stroke = stroke;
  if (strokeWidth !== undefined) svgProps.strokeWidth = strokeWidth;
  if (style !== undefined) svgProps.style = style;

  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={className}
    >
      <SvgXml
        className={className}
        src={svgMarkup}
        {...svgProps}
        aria-label={alt}
        role={alt ? "img" : undefined}
      />
    </div>
  );
}
