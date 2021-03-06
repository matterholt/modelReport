import React from "react";

export default function LabelFor({ labelFor, labelTitle }) {
  return (
    <label
      htmlFor={labelFor}
      className="flex flex-col mx-2 mt-2 w-3/4 text-md text-blue-800 font-semibold"
    >
      {labelTitle}
    </label>
  );
}
