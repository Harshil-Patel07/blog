import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

const BlogLine = ({ className }: IconProps) => {
    return (
        <svg width="1440" height="1" className={className} viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="1440" y2="0.5" stroke="url(#paint0_radial_668_570)" />
            <defs>
                <radialGradient id="paint0_radial_668_570" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.01 1.02462) rotate(155.095) scale(617.413 889075)">
                    <stop stop-color="#A7DFF2" />
                    <stop offset="1" stop-color="#A7DFF2" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

    );
};

export default BlogLine;
