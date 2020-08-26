import * as React from "react";

function SvgCancel(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.344c-4.594 0-8.344-3.75-8.344-8.344 0-4.594 3.75-8.344 8.344-8.344 4.594 0 8.344 3.75 8.344 8.344 0 4.594-3.75 8.344-8.344 8.344z"
        fill="#747576"
      />
      <path
        d="M13.094 6.906c-.344-.343-.844-.343-1.156 0L10 8.844 8.094 6.938c-.344-.344-.844-.344-1.156 0-.344.343-.344.843 0 1.156L8.844 10l-1.906 1.906c-.344.344-.344.844 0 1.156.156.157.406.25.593.25.188 0 .407-.093.594-.25l1.906-1.906 1.906 1.906c.157.157.407.25.594.25.188 0 .406-.093.594-.25.344-.343.344-.843 0-1.156L11.156 10l1.906-1.906a.84.84 0 00.032-1.188z"
        fill="#747576"
      />
    </svg>
  );
}

export default SvgCancel;