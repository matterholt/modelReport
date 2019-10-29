import React from "react";

function LoginRequest() {
  function test(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <div className=" bg-white shadow-md rounded px-20 pb-8 ">
      <h1 className="font-black tracking-wider text-4xl text-center p-5 text-blue-900 font-extrabold">
        LOGIN
      </h1>
      <form className="flex flex-col ">
        <label className="flex flex-col text-xl text-blue-800 font-semibold">
          Email:
          <input className="shadow my-2 text-xl p-2" type="email" />
        </label>

        <label className="flex flex-col text-xl text-blue-800 font-semibold">
          Password:
          <input className="shadow my-2 text-xl p-2" type="password" />
        </label>

        <button
          onClick={test}
          className="bg-gray-700 text-blue-100 p-3 m-3 shadow rounded 
											hover:bg-blue-700 hover:font-semibold hover:shadow-md
											focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        <button
          onClick={test}
          className="  p-3 m-3  rounded text-blue-900 border
											hover:font-semibold hover:border-4 hover:border-blue-700 hover:border-solid hover:shadow-md
											focus:outline-none focus:shadow-outline"
          type="button"
        >
          Request to join
        </button>
      </form>
    </div>
  );
}

class LoginMain extends React.Component {
  render() {
    return (
      <div className=" h-screen font-sans bg-gray-100 flex flex-col items-center justify-start">
        <LoginRequest />
      </div>
    );
  }
}

export default LoginMain;
