import React, { useState, useEffect } from "react";
import FormBox from "../component/FormBox";

function ModelInfo({ modelIfoCollect }) {
  const [modelInfoCollection, updateModelInfoCollection] = useState({});

  const compileModelInfo = (e, baseModel) => {
    e.preventDefault();
    console.log(baseModel);
    //updateModelInfoCollection(baseModel, cmModelName, reasonModel);
  };

  return (
    <>
      <FormBox getData={compileModelInfo} />
    </>
  );
}

export default ModelInfo;
