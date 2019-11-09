import React from "react";

export default function LabelFor({ labelFor, labelTitle }) {
  return (
    <label
      htmlFor={labelFor}
      className="flex flex-col m-4 w-3/4 text-md text-blue-800 font-semibold"
    >
      {labelTitle}
    </label>
  );
}
