// src/components/SvgComponent.js
import React from 'react';
import InlineSVG from 'react-inlinesvg';
import svgData from '../assets/SVG/SvgStorage';

/**
 * Renders an SVG component based on the provided parameters.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.svgKey - The key to identify the SVG markup in the svgData object.
 * @param {number} props.width - The width of the SVG component.
 * @param {number} props.height - The height of the SVG component.
 * @param {string} props.fill - The fill color of the SVG component.
 * @param {string} props.stroke - The stroke color of the SVG component.
 * @param {number} props.strokeWidth - The stroke width of the SVG component.
 * @returns {JSX.Element} - The rendered SVG component.
 */
export default function SvgComponent({ svgKey, width, height, fill, stroke, strokeWidth }) {
    const svgMarkup = svgData[svgKey];

    if (!svgMarkup) {
        console.error(`No SVG found for key: ${svgKey}`);
        return null;
    }

    const styledSvgMarkup = svgMarkup
        .replace(/width="[^"]*"/, `width="${width}"`)
        .replace(/height="[^"]*"/, `height="${height}"`)
        .replace(/fill="[^"]*"/g, `fill="${fill}"`)
        .replace(/stroke="[^"]*"/g, `stroke="${stroke}"`)
        .replace(/strokeWidth="[^"]*"/g, `strokeWidth="${strokeWidth}"`);

    return <InlineSVG src={styledSvgMarkup} />;
}
