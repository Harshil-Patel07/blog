import React from "react";
import { IconProps } from "../../../../../lib/sanity/types";

const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H12.615V14.04H10.277V11.315H12.615V9.315C12.615 6.99 14.035 5.723 16.115 5.723C16.814 5.721 17.514 5.757 18.21 5.83V8.25H16.775C15.647 8.25 15.427 8.788 15.427 9.575V11.31H18.124L17.774 14.035H15.426V21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookIcon;
