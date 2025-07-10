import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import UnderConstruction from "./UnderConstruction";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header pageType="browse" />
      <MainContainer/>
      <UnderConstruction/>
    </>
  );
};

export default Browse;
