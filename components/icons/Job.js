import * as React from "react";

function SvgJob(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 300 357" fill="none" {...props}>
      <g clipPath="url(#job_svg__clip0)">
        <path d="M299.492 0H0v357h299.492V0z" fill="#3F3D56" />
        <path
          d="M255.427 96.74H44.812v8.963h210.615v-8.962zM255.427 155.743H44.812v8.962h210.615v-8.962zM255.427 171.427H44.812v8.962h210.615v-8.962z"
          fill="#E0E0E0"
        />
        <path
          opacity={0.6}
          d="M255.427 140.059h-66.471v8.962h66.471v-8.962z"
          fill="#3AD29F"
        />
        <path
          d="M185.222 208.023h-66.471v8.962h66.471v-8.962z"
          fill="#FF6584"
        />
        <path
          opacity={0.5}
          d="M252.435 343.381c16.538 0 29.945-13.407 29.945-29.945s-13.407-29.945-29.945-29.945-29.945 13.407-29.945 29.945 13.407 29.945 29.945 29.945z"
          fill="url(#job_svg__paint0_linear)"
        />
        <path
          d="M252.435 341.619c15.565 0 28.183-12.618 28.183-28.183S268 285.253 252.435 285.253s-28.183 12.618-28.183 28.183 12.618 28.183 28.183 28.183z"
          fill="#69F0AE"
        />
        <path
          d="M240.619 309.179l10.568 9.688 14.973-22.018 5.284 4.404-20.257 26.421-14.972-16.733 4.404-1.762z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="job_svg__paint0_linear"
          x1={252.435}
          y1={343.381}
          x2={252.435}
          y2={283.491}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <clipPath id="job_svg__clip0">
          <path fill="#fff" d="M0 0h299.492v357H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgJob;
