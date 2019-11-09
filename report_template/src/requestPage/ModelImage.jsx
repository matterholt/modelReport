import React, { useState } from "react";
import TitleForm from "../component/TitleForm";
import ImageInput from "../component/ImageInput";
import ImageDisplay from "../component/ImageDisplay";

export default function UploadImg() {
  const [imageOf, setImageOf] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  function previewImagefun(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log("getit");
      setImageOf(file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className=" w-full max-w-lg p-4 m-4 bg-white flex flex-col rounded items-center ">
      <TitleForm formTitle="Add image" />
      <ImageInput previewImagefun={previewImagefun} />
      <ImageDisplay previewImg={previewImg} />
    </div>
  );
}
