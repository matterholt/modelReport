import React from "react";

export default function ImageDisplay({ previewImg }) {
  return (
    <img
      className="border border-solid w-3/4 bg-white"
      src={previewImg}
      alt="geometry model that shows change updates"
    />
  );
}
