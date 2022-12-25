import React from "react";

const Dashboard = (props) => {
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
        <path d="M14.667 7.267V2.733c0-1-.427-1.4-1.487-1.4h-2.693c-1.06 0-1.487.4-1.487 1.4v4.534c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4Z" />
        <path
          opacity={0.4}
          d="M14.667 13.267v-1.2c0-1-.427-1.4-1.487-1.4h-2.693c-1.06 0-1.487.4-1.487 1.4v1.2c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4Z"
        />
        <path d="M7 8.733v4.534c0 1-.427 1.4-1.487 1.4H2.82c-1.06 0-1.487-.4-1.487-1.4V8.733c0-1 .427-1.4 1.487-1.4h2.693c1.06 0 1.487.4 1.487 1.4Z" />
        <path
          opacity={0.4}
          d="M7 2.733v1.2c0 1-.427 1.4-1.487 1.4H2.82c-1.06 0-1.487-.4-1.487-1.4v-1.2c0-1 .427-1.4 1.487-1.4h2.693c1.06 0 1.487.4 1.487 1.4Z"
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

export default Dashboard;
