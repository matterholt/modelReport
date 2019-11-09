import React from "react";

export default function ImageInput({ previewImagefun }) {
  return (
    <div>
      <input
        className=" m-5 p-5 border-1 "
        onChange={previewImagefun}
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        multiple
      />
    </div>
  );
}
