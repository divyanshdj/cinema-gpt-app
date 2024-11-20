import React, { useState, useRef } from "react";
import bg1 from "../assets/bg-1.jpg";
import HeaderLogin from "./HeaderLogin";
import { validateSignInData, validateSignUpData} from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormState = () => {
    setIsSignUp(!isSignIn);
    setErrorMessage(null);
    clearInputs();
  };

  const clearInputs = () => {
    if (name.current) name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  const handleFormSubmit = () => {
    if (isSignIn) {
      const message = validateSignInData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (!message) {
        // Sign In Logic Here
        console.log("Sign In Successful");
        clearInputs();
      }
    } else {
      const message = validateSignUpData(name.current.value, email.current.value, password.current.value);
      setErrorMessage(message);
      if (!message) {
        // Sign Up Logic Here
        console.log("Sign Up Successful");
        clearInputs();
      }
    }
  }

  return (
    <>
      <div className="absolute w-full z-20">
        <HeaderLogin />
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center absolute -z-10"
        style={{
          backgroundImage: `url(${bg1})`,
          filter: "brightness(0.4)",
        }}
      ></div>

      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={(e)=>e.preventDefault()} className="m-10 relative w-11/12 sm:w-96 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-white">
          <h1 className="text-3xl text-white font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                ref={name}
                type="text"
                placeholder="Enter your full name"
                className="py-3 px-4 w-full border-2 border-white rounded-lg focus:outline-none bg-transparent text-white"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              ref={email}
              type="text"
              placeholder="Your email address"
              className="py-3 px-4 w-full border-2 border-white rounded-lg focus:outline-none bg-transparent text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              ref={password}
              type="password"
              placeholder="Enter your password"
              className="py-3 px-4 w-full border-2 border-white rounded-lg focus:outline-none bg-transparent text-white"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2 flex items-start justify-start gap-1"><span className="material-symbols-outlined text-lg">
            error
            </span> {errorMessage}</div>
          )}
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="py-3 px-4 my-4 w-full text-sm sm:text-base font-bold text-white bg-[#E50914] hover:bg-red-600 rounded-lg transition duration-300"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="font-normal">
            {isSignIn ? "New to CinemaGPT? " : "Already have an account? "}
            <span
              className="font-bold hover:underline cursor-pointer"
              onClick={handleFormState}
            >
              {isSignIn ? "Sign up now." : "Sign in here."}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
