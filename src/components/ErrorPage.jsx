import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">
        We're sorry, but an unexpected error has occurred.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
        aria-label="Go back to home page"
      >
        Go to Home Page
      </button>
    </main>
  );
};

export default ErrorPage;
