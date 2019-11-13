import React from "react";
export default function RemoveItemButton({ removeItem }) {
  return (
    <button
      onClick={removeItem}
      className=" text-white px-2 mr-4 rounded bg-red-700 "
    >
      {" "}
      X{" "}
    </button>
  );
}
