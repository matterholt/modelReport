import React, { useState } from "react";

function ModelAnalysis() {
  return (
    <form className="max-w-lg bg-gray-300 flex flex-col rounded">
      <h2 className="text-center font-bold text-lg m-5 "> Analysis Model</h2>

      <label className="flex flex-col my-2 mx-10 text-md text-blue-800 font-semibold">
        File Location:
        <input className="shadow my-2 p-2" />
      </label>

      <h2 className="px-5 text-md text-blue-800 font-semibold">
        {" "}
        Analysis to Validate
      </h2>

      <div className="flex flex-col justify-start">
        <label className="flex items-center px-5 text-base text-blue-800 ">
          <input type="checkbox" className="shadow m-2" />
          Stiffness
        </label>
        <label className="flex items-center px-5 text-base text-blue-800 ">
          <input type="checkbox" className="shadow mx-2" />
          Static
        </label>
        <label className="flex items-center px-5 text-base text-blue-800 ">
          <input type="checkbox" className="shadow mx-2" />
          Durability
        </label>
        <label className="flex items-center px-5 text-base text-blue-800 ">
          <input type="checkbox" className="shadow mx-2" />
          NVH
        </label>
        <label className="flex items-center px-5 text-base text-blue-800 ">
          <input type="checkbox" className="shadow mx-2" />
          Other
        </label>
      </div>
    </form>
  );
}
export default ModelAnalysis;
