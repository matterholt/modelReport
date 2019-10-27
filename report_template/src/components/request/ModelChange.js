import React, { useState } from "react";
function ModelChange() {
  const [changesall, addChages] = useState([]);
  const [change, updateChange] = useState("test");

  function addItemChange(e) {
    e.preventDefault();
    addChages([...changesall, change]);
    updateChange("");
  }

  return (
    <form className=" w-full max-w-lg bg-gray-300 flex flex-col rounded">
      <h2 className="text-center font-bold text-lg m-5 "> Model Changes</h2>
      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Model Image:
        <input className="shadow my-2 p-2" />
      </label>

      <div className="flex items-center">
        <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
          Model changes:
          <input
            value={change}
            onChange={e => updateChange(e.target.value)}
            className="shadow my-2 p-2 "
          />
        </label>
        <button
          onClick={addItemChange}
          className="flex justify-center text-white w-10 h-10 rounded-full bg-blue-700 text-2xl"
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <h2 className="text-center border-b-2 p-2">Changes To Model</h2>
        <ul className="bg-gray-200 rounded p-4 m-2">
          {changesall.map((item, k) => {
            return <li key={k}>{item}</li>;
          })}
        </ul>
      </div>
    </form>
  );
}
export default ModelChange;
