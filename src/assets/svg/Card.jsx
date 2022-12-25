import React from "react";

const Card = (props) => {
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
        <path
          opacity={0.4}
          d="m2.62 10.586 7.966-7.966M7.401 12.185l.8-.8M9.195 10.393 10.79 8.8"
          strokeMiterlimit={10}
        />
        <path d="m2.4 6.825 4.428-4.427c1.413-1.413 2.12-1.42 3.52-.02l3.273 3.274c1.4 1.4 1.393 2.106-.02 3.52l-4.427 4.426c-1.413 1.414-2.12 1.42-3.52.02l-3.273-3.273c-1.4-1.4-1.4-2.1.02-3.52ZM1.333 14.667h13.334" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Card;
