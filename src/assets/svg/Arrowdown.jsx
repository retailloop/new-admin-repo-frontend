import React from "react";

const Arrowdown = (props) => {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333Zm2.353 7.354-2 2c-.1.1-.226.146-.353.146a.495.495 0 0 1-.353-.146l-2-2a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L6.5 8.127v-3.46c0-.274.227-.5.5-.5s.5.226.5.5v3.46L8.647 6.98a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707Z"
        fill="#EE1717"
      />
    </svg>
  );
};

export default Arrowdown;
