import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-t"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form
        action=""
        className="w-2/5 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full outline-none bg-gray-900 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full outline-none bg-gray-900 text-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full outline-none bg-gray-900 text-white"
        />
        <button className="p-4 my-6 bg-red-700 w-full text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="p-1 my-4 text-white" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already registered? Sign In Now"
            : "New to Netflix 2.0? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
