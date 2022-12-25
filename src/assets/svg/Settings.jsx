import React from "react";

const Settings = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.34}
        d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke={props.color || "#605D66"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.333 8.588V7.414A1.27 1.27 0 0 1 2.6 6.148c1.207 0 1.7-.854 1.093-1.9-.346-.6-.14-1.38.467-1.727l1.153-.66a1.113 1.113 0 0 1 1.52.4l.074.127c.6 1.046 1.586 1.046 2.193 0l.073-.127a1.113 1.113 0 0 1 1.52-.4l1.154.66c.606.347.813 1.127.466 1.727-.606 1.046-.113 1.9 1.094 1.9a1.27 1.27 0 0 1 1.266 1.266v1.174a1.27 1.27 0 0 1-1.266 1.266c-1.207 0-1.7.854-1.094 1.9.347.607.14 1.38-.466 1.727l-1.154.66a1.113 1.113 0 0 1-1.52-.4l-.073-.127c-.6-1.046-1.587-1.046-2.193 0l-.074.127a1.113 1.113 0 0 1-1.52.4l-1.153-.66a1.266 1.266 0 0 1-.467-1.727c.607-1.046.114-1.9-1.093-1.9a1.27 1.27 0 0 1-1.267-1.266Z"
        stroke={props.color || "#605D66"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Settings;
