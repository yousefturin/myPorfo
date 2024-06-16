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
 * @param {string} [props.fill] - The fill color of the SVG component (optional).
 * @param {string} [props.stroke] - The stroke color of the SVG component (optional).
 * @param {number} [props.strokeWidth] - The stroke width of the SVG component (optional).
 * @returns {JSX.Element} - The rendered SVG component.
 */
export default function SvgComponent({ svgKey, width, height, fill, stroke, strokeWidth }) {
    const svgMarkup = svgData[svgKey];

    if (!svgMarkup) {
        console.error(`No SVG found for key: ${svgKey}`);
        return null;
    }

    let styledSvgMarkup = svgMarkup
        .replace(/width="[^"]*"/, `width="${width}"`)
        .replace(/height="[^"]*"/, `height="${height}"`);

    if (fill !== undefined) {
        styledSvgMarkup = styledSvgMarkup.replace(/fill="[^"]*"/g, `fill="${fill}"`);
    }

    if (stroke !== undefined) {
        styledSvgMarkup = styledSvgMarkup.replace(/stroke="[^"]*"/g, `stroke="${stroke}"`);
    }

    if (strokeWidth !== undefined) {
        styledSvgMarkup = styledSvgMarkup.replace(/stroke-width="[^"]*"/g, `stroke-width="${strokeWidth}"`);
    }

    return <InlineSVG src={styledSvgMarkup} />;
}
