import React from "react";

const Forbidden = (props) => {
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
        stroke={props.color || "#EE1717"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.933 1.333H6.066c-.453 0-1.093.267-1.413.587L1.92 4.653c-.32.32-.587.96-.587 1.414v3.866c0 .454.267 1.094.587 1.414l2.733 2.733c.32.32.96.587 1.413.587h3.867c.453 0 1.093-.267 1.413-.587l2.734-2.733c.32-.32.586-.96.586-1.414V6.067c0-.454-.266-1.094-.586-1.414L11.346 1.92c-.32-.32-.96-.587-1.413-.587Z" />
        <path opacity={0.4} d="m3.293 12.721 9.427-9.427" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Forbidden;
