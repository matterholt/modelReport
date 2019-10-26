import React, { useState } from "react";

function ModelAnalysis() {
  return <div></div>;
}

function ButtonProcess() {
  return (
    <div className="flex">
      <button className="w-6/12 border p-4 bg-blue-500 text-white ">
        {" "}
        Back{" "}
      </button>
      <button className="w-6/12 border p-4 bg-blue-700 text-white ">
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

function ModelInfo() {
  return (
    <form className="max-w-lg bg-white flex flex-col rounded">
      <h2 className="text-center font-bold text-lg m-5 "> Model INFO</h2>
      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Base Name:
        <input className="shadow my-2 p-2" />
      </label>
      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Model Name:
        <input className="shadow my-2 p-2" />
      </label>
      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        Model Purpose:
        <textarea className="shadow my-2 p-2" />
      </label>
      <ButtonProcess />
    </form>
  );
}

function ModelChange() {
  const [changesall, addChages] = useState([
    "test_item1",
    "test_item2",
    "test_item3"
  ]);
  const [change, updateChange] = useState("test");

  function addItemChange(e) {
    e.preventDefault();
    addChages([...changesall, change]);
    updateChange("");
  }

  return (
    <form className=" w-full max-w-lg bg-white flex flex-col rounded">
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
        <ul className="bg-blue-200 rounded p-4 m-2">
          {changesall.map((item, k) => {
            return <li key={k}>{item}</li>;
          })}
        </ul>
      </div>
      <ButtonProcess />
    </form>
  );
}

function Request() {
  const [pgNum, setPgNum] = useState(1);
  /*
  if (pgNum === 1) {
    return <ModelInfo />;
  } else if (pgNum === 2) {
    return <ModelChange />;
  }
  */
  return (
    <div className="flex w-screen justify-around">
      <ModelInfo />
      <ModelChange />
    </div>
  );
}

const FEARequest = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-start items-center">
      <Request />
    </div>
  );
};

export default FEARequest;
