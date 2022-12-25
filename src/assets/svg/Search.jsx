import React from "react";

const Search = (props) => {
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
        stroke="#BFBEC2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.667 14a6.333 6.333 0 1 0 0-12.667 6.333 6.333 0 0 0 0 12.667Z" />
        <path opacity={0.4} d="m14.667 14.667-1.334-1.334" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Search;
