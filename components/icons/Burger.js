import * as React from "react";

function SvgBurger(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#burger_svg__clip0)">
        <path
          d="M18.313 7.031c-.344-3-2.938-5.343-6.032-5.343H7.875c-1.594 0-3.188.656-4.281 1.75-1.094 1-1.656 2.25-1.844 3.687-1 .5-1.75 1.594-1.75 2.75v.25c0 1.25.75 2.344 1.75 2.844.344 3 2.938 5.344 6.031 5.344h4.438c1.594 0 3.187-.657 4.281-1.75 1-1 1.594-2.25 1.75-3.594 1.094-.5 1.75-1.594 1.75-2.844v-.25c.063-1.156-.688-2.25-1.688-2.844zM7.78 3.344h4.438c2 0 3.75 1.437 4.281 3.344H3.594c.156-.75.594-1.5 1.156-2.094.781-.813 1.844-1.25 3.031-1.25zm4.532 13.375H7.875c-2.094 0-3.75-1.438-4.281-3.344h12.969c-.157.75-.594 1.5-1.157 2.094-.844.844-1.937 1.25-3.094 1.25zm6.187-6.5c0 .844-.844 1.5-1.781 1.5H3.344c-.906 0-1.688-.656-1.688-1.5v-.25c0-.844.75-1.5 1.688-1.5h13.562a1.58 1.58 0 011.594 1.594v.156z"
          fill="#747576"
        />
      </g>
      <defs>
        <clipPath id="burger_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBurger;