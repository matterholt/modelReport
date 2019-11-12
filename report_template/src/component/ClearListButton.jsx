import React from "react";

export default function ClearListButton({ clearItemsChange }) {
  return (
    <button
      onClick={clearItemsChange}
      className="  w-1/3 text-black px-2 rounded bg-red-200 "
    >
      {" "}
      CLEAR
    </button>
  );
}
