import React from "react";

const ArrowUp = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1.333A6.67 6.67 0 0 0 1.333 8 6.669 6.669 0 0 0 8 14.667 6.67 6.67 0 0 0 14.667 8 6.67 6.67 0 0 0 8 1.333Zm2.353 6.687a.494.494 0 0 1-.707 0L8.5 6.873v3.46c0 .274-.227.5-.5.5a.504.504 0 0 1-.5-.5v-3.46L6.353 8.02a.503.503 0 0 1-.706 0 .503.503 0 0 1 0-.707l2-2a.503.503 0 0 1 .706 0l2 2a.503.503 0 0 1 0 .707Z"
        fill="#10AA69"
      />
    </svg>
  );
};

export default ArrowUp;
