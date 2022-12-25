import React from "react";

const Report = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.4}
        d="M12.213 8c1.734 0 2.454-.667 1.814-2.854-.434-1.473-1.7-2.74-3.174-3.173C8.667 1.333 8 2.053 8 3.786v1.92C8 7.333 8.667 8 10 8h2.213Z"
        stroke={props.color || "#605D66"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 9.801a6.06 6.06 0 0 1-6.947 4.78c-2.526-.407-4.56-2.44-4.973-4.967a6.067 6.067 0 0 1 4.76-6.94"
        stroke={props.color || "#605D66"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Report;
