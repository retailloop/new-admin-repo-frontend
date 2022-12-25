import React from "react";

const Edit = (props) => {
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
        <path
          opacity={0.4}
          d="M7.333 1.333H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.334 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.333 4.667-4.667V8.667"
        />
        <path
          d="M10.693 2.014 5.44 7.267c-.2.2-.4.594-.44.88l-.287 2.007c-.106.727.407 1.233 1.134 1.133l2.006-.286c.28-.04.674-.24.88-.44l5.254-5.254c.906-.906 1.333-1.96 0-3.293-1.334-1.333-2.387-.907-3.294 0Z"
          strokeMiterlimit={10}
        />
        <path
          opacity={0.4}
          d="M9.94 2.766a4.763 4.763 0 0 0 3.293 3.293"
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Edit;
