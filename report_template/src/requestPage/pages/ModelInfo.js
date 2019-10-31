import React, { useState } from "react";
function ModelInfo({ modelIfoCollect }) {
  const [baseModel, setBaseModel] = useState("");
  const [cmModelName, setCmModelName] = useState("");
  const [reasonModel, setReasonModel] = useState("");

  const compileModelInfo = e => {
    e.preventDefault();
    modelIfoCollect(baseModel, cmModelName, reasonModel);
  };

  return (
    <form className="max-w-lg bg-gray-300 flex flex-col rounded">
      <h2 className="text-center font-bold text-lg m-5 "> Model INFO</h2>

      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Base Name:
        <input
          value={baseModel}
          onChange={e => setBaseModel(e.target.value)}
          className="shadow my-2 p-2"
        />
      </label>

      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Model Name:
        <input
          value={cmModelName}
          onChange={e => setCmModelName(e.target.value)}
          className="shadow my-2 p-2"
        />
      </label>

      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Model Purpose:
        <textarea
          value={reasonModel}
          onChange={e => setReasonModel(e.target.value)}
          placeholder="Reason for cm"
          className="shadow my-2 p-2"
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={compileModelInfo}
      >
        confirm continue{" "}
      </button>
    </form>
  );
}
export default ModelInfo;
