import React, { useState } from "react";

import Header from "../component/Header";
import SideNav from "../component/SideNav";
import TitleForm from "../component/TitleForm";
import LabelInput from "../component/LabelInput";
import StepButton from "../component/StepButton";

const FormS = () => {
  return (
    <>
      <label className="flex flex-col text-xl text-blue-800 font-semibold">
        Email:
        <input className="shadow my-2 text-xl p-2" type="email" />
      </label>
      <label className="flex flex-col text-xl text-blue-800 font-semibold">
        Password:
        <input className="shadow my-2 text-xl p-2" type="password" />
      </label>
    </>
  );
};

const LoginRequest = () => {
  const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });

  function updateValues(e) {
    e.preventDefault();
    setLoginCreds({
      ...loginCreds,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="flex flex-col bg-white p-6 m-2 rounded p-4">
      <TitleForm formTitle="Login" />
      <form className="bg-white flex flex-col rounded w-64">
        <LabelInput
          labelName="userName"
          labelTitle="User Name"
          labelValue={loginCreds.username}
          updateValue={updateValues}
        />
        <LabelInput
          labelName="userPass"
          labelTitle="Password"
          labelValue={loginCreds.username}
          updateValue={updateValues}
        />
        <StepButton stepProcess="submit" compileModelInfo={updateValues} />
      </form>
      <RequestJoin />
    </div>
  );
};
const RequestJoin = () => {
  return (
    <div>
      <p className="italic text-gray-500">
        Request to <a> join project...</a>
      </p>
    </div>
  );
};

const LoginMain = () => {
  return (
    <div className="flex flex-col bg-gray-500 h-screen  ">
      <Header titleHeader="Fea Login" />
      <div className="flex flex-row items-center justify-center">
        <LoginRequest />
      </div>
    </div>
  );
};

export default LoginMain;
