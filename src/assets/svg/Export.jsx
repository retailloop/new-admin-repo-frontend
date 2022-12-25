import React from "react";

const Export = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#a)"
        stroke={props.color || "#3F12C4"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g opacity={0.4}>
          <path d="m8.667 7.334 5.466-5.467M14.666 4.533v-3.2h-3.2" />
        </g>
        <path d="M7.333 1.333H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.334 4.667-4.667V8.667" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Export;
