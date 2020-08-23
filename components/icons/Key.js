import * as React from "react";

function SvgKey(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#key_svg__clip0)">
        <path
          d="M3.562 1.906L2 .25c-.344-.344-.844-.344-1.156 0-.313.344-.344.844 0 1.156l1 1.094-1.5 1.562C0 4.406 0 4.906.344 5.22a.8.8 0 00.593.25c.25 0 .407-.094.594-.25l1.375-1.47L4.562 5.5l-2.25 2.313c-.343.344-.343.844 0 1.157a.8.8 0 00.594.25c.25 0 .406-.094.594-.25l2.156-2.25 4.563 4.812-.407.406c-1 1-1 2.563 0 3.563l3.75 3.75c.47.5 1.126.75 1.72.75.655 0 1.25-.25 1.75-.75l2-2c.5-.5.874-1.156.874-1.813 0-1-.156-1.406-.656-1.812l-3.75-3.75c-1-1-2.563-1-3.563 0l-.406.406-7.969-8.375zm14.532 14.125l-2 2c-.344.344-.844.344-1.157 0l-3.75-3.75c-.343-.344-.343-.844 0-1.156l1-1 1-1a.914.914 0 01.594-.25c.25 0 .406.094.594.25l3.75 3.75c.031.031.063.062.063.094.187.25.187.625 0 .906 0 .062-.063.094-.094.156z"
          fill="#747576"
        />
      </g>
      <defs>
        <clipPath id="key_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgKey;
