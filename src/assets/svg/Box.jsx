import React from "react";

const Box = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        opacity={0.4}
        stroke={props.color || "#605D66"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.115 4.96 8 8.369l5.847-3.387M8 14.406V8.359" />
      </g>
      <path
        d="M6.62 1.654 3.06 3.628c-.806.446-1.466 1.566-1.466 2.486v3.767c0 .92.66 2.04 1.466 2.487l3.56 1.98c.76.42 2.007.42 2.767 0l3.56-1.98c.807-.447 1.467-1.567 1.467-2.487V6.114c0-.92-.66-2.04-1.467-2.486l-3.56-1.98c-.767-.42-2.007-.42-2.767.006Z"
        stroke={props.color || "#605D66"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Box;
