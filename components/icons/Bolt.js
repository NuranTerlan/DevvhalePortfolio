import * as React from "react";

function SvgBolt(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#bolt_svg__clip0)">
        <path
          d="M7.906 20c-.093 0-.25 0-.343-.094-.344-.187-.532-.531-.532-.968L8.25 12.53H2.281c-.343 0-.625-.187-.781-.531-.187-.25-.094-.625.094-.875L9.656.375c.25-.25.625-.437.969-.344.344.188.625.532.625.875v5.532h6.469c.343 0 .625.187.781.53.188.345.094.688-.094.97L8.594 19.75c-.156.156-.438.25-.688.25zm-3.875-9.188h5.25c.25 0 .532.094.688.344.187.188.25.438.187.688l-.781 4.125 6.469-7.813h-5.5c-.531 0-.875-.343-.875-.875v-3.75L4.03 10.812z"
          fill="#747576"
        />
      </g>
      <defs>
        <clipPath id="bolt_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBolt;
