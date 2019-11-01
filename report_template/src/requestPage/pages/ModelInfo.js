import React, { useState, useEffect } from "react";
import FormBox from "../request_comp/FormBox";

function ModelInfo({ modelIfoCollect }) {
  const [modelInfoCollection, updateModelInfoCollection] = useState({});

  const compileModelInfo = (e, baseModel) => {
    e.preventDefault();
    console.log(baseModel);
    //updateModelInfoCollection(baseModel, cmModelName, reasonModel);
  };

  return (
    <form>
      <FormBox getData={compileModelInfo} />
    </form>
  );
}

export default ModelInfo;
