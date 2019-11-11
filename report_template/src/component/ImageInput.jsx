import React, { useState } from "react";
import LabelFor from "./LabelFor";

const ImageDisplay = ({ tempImage }) => {
  if (tempImage) {
    return (
      <>
        <img width="550" src={tempImage} alt="request model" />
      </>
    );
  } else {
    return <></>;
  }
};

export default function ImageInput({ labelTitle, labelName, updateValue }) {
  const [tempImage, updateTempImage] = useState(null);

  function handleChange(e) {
    updateTempImage(URL.createObjectURL(e.target.files[0]));
    updateValue(e);
  }

  return (
    <div>
      <LabelFor labelFor={labelName} labelTitle={labelTitle} />
      <ImageDisplay tempImage={tempImage} />
      <input
        className="shadow m-2 p-2 bg-white"
        onChange={handleChange}
        type="file"
        name={labelName}
        accept=".jpg, .jpeg, .png"
      />
    </div>
  );
}
