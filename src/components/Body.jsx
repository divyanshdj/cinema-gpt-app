import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";
import ErrorPage from "./ErrorPage"; // make sure the path is correct
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
