import React from "react";

const Transaction = (props) => {
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
        <path d="M6 14.667h4c3.333 0 4.667-1.333 4.667-4.667V6c0-3.333-1.334-4.667-4.667-4.667H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.334 1.334 4.667 4.667 4.667Z" />
        <g opacity={0.4} strokeMiterlimit={10}>
          <path d="M11.433 9.213 9.406 11.24M4.568 9.213h6.866M4.568 6.787 6.594 4.76M11.434 6.786H4.568" />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Transaction;
