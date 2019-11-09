import React, { useState } from "react";
import LabelFor from "./LabelFor";

export default function ImageInput({ labelTitle, labelName, updateValue }) {
  const [tempImage, updateTempImage] = useState("null");

  function handleChange(e) {
    updateTempImage(URL.createObjectURL(e.target.files[0]));
    updateValue(e);
  }
  return (
    <div>
      <LabelFor labelFor={labelName} labelTitle={labelTitle} />
      <input
        className="shadow m-2 p-2 bg-white"
        onChange={handleChange}
        type="file"
        name={labelName}
        accept=".jpg, .jpeg, .png"
      />
      <img width="550" src={tempImage} alt="request model" />
    </div>
  );
}
