import React from "react";

const Building = (props) => {
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
        stroke={props.color || "#605D66"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.332 14.667H2.72c-.773 0-1.406-.62-1.406-1.38V3.394c0-1.747 1.3-2.54 2.893-1.76l2.96 1.453c.64.313 1.166 1.147 1.166 1.853v9.727ZM14.647 10.041v2.52c0 1.44-.667 2.107-2.107 2.107H8.333v-7.72l.314.066 3 .674 1.353.3c.88.193 1.6.646 1.64 1.926.007.04.007.08.007.127Z" />
        <path opacity={0.4} d="M3.667 6H5.98M3.667 8.666H5.98" />
        <path d="M11.646 7.687v2.146c0 .827-.674 1.5-1.5 1.5-.827 0-1.5-.673-1.5-1.5v-2.82l3 .674ZM14.64 9.914a1.499 1.499 0 0 1-1.494 1.42c-.827 0-1.5-.673-1.5-1.5V7.688l1.353.3c.88.193 1.6.646 1.64 1.926Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Building;
