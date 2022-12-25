import React from "react";

const Delete = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 3.987a67.801 67.801 0 0 0-6.68-.333c-1.32 0-2.64.066-3.96.2L2 3.987"
        stroke={props.color || "#EE1717"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.34}
        d="m5.667 3.313.146-.873C5.92 1.807 6 1.333 7.127 1.333h1.746c1.127 0 1.214.5 1.314 1.114l.146.866"
        stroke={props.color || "#EE1717"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m12.567 6.094-.433 6.713c-.074 1.047-.134 1.86-1.994 1.86H5.86c-1.86 0-1.92-.813-1.993-1.86l-.433-6.713"
        stroke={props.color || "#EE1717"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.34}
        d="M6.887 11h2.22M6.333 8.334h3.334"
        stroke={props.color || "#EE1717"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Delete;
