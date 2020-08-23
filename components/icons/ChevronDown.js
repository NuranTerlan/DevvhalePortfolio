import * as React from "react";

function SvgChevronDown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#chevron-down_svg__clip0)">
        <path
          d="M10 15.031c-.406 0-.75-.156-1.094-.406L.25 6.469c-.344-.344-.344-.844 0-1.157.344-.343.844-.343 1.156 0L10 13.376l8.594-8.156c.343-.344.843-.344 1.156 0 .344.343.344.843 0 1.156l-8.656 8.156c-.344.438-.688.5-1.094.5z"
          fill="#747576"
        />
      </g>
      <defs>
        <clipPath id="chevron-down_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgChevronDown;
