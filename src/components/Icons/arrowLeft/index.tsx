import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

function ArrowLeft({ className }: IconProps) {
  return (
    <div>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M3 12.5H21M21 12.5L16 7.5M21 12.5L16 17.5"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ArrowLeft;
