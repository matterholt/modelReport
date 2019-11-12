import React from "react";

export default function AddListButton({ addItemChange }) {
  return (
    <button
      onClick={addItemChange}
      className=" w-1/3  text-white p-2 rounded bg-blue-700"
    >
      {" "}
      ADD
    </button>
  );
}
