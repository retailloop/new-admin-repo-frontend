import React from "react";

const AddCircle = (props) => {
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
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 14.667c3.667 0 6.667-3 6.667-6.667s-3-6.667-6.667-6.667-6.667 3-6.667 6.667 3 6.667 6.667 6.667Z" />
        <g opacity={0.4}>
          <path d="M5.333 8h5.334M8 10.667V5.334" />
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

export default AddCircle;
