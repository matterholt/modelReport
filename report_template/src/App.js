import React from "react";
import LoginMain from "./loginPage/Login";
import FEARequest from "./requestPage/FeaRequest.js";

function App() {
  return (
    <div className=" hover: h-screen font-sans bg-gray-100 flex flex-col items-center justify-start">
      <h1 className=" text-4xl p-5 mb-5 bg-blue-900 w-full text-white font-bold">
        {" "}
        FEA Request{" "}
      </h1>
      <LoginMain />

      <FEARequest />
    </div>
  );
}

export default App;
