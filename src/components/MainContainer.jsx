import React, { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";
import VideoData from "./VideoData";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!movies) setLoadingTimeout(true);
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, [movies]);

  if (!movies) {
    return (
      <div className="flex items-center justify-center h-[50vh] sm:h-[60vh] md:h-screen w-screen bg-gray-900">
        <div className="text-white text-center px-6">
          {loadingTimeout ? (
            <>
              <div className="flex flex-col items-center mt-10 sm:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h2 className="text-xl font-semibold mb-2">
                  Content Unavailable
                </h2>
                <p className="text-gray-300 text-sm mb-4 w-full text-center">
                  Network restrictions detected (common with Jio) - try
                  switching networks.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition-colors"
                >
                  Retry
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-red-500 mb-4 mx-auto"></div>
              <h2 className="text-lg font-bold">Loading Movies...</h2>
            </>
          )}
        </div>
      </div>
    );
  }

  const mainMovie = movies[1];
  const { original_title, overview, id, vote_average, release_date } =
    mainMovie;

  return (
    <div className="relative h-[60vh] min-h-[400px] sm:h-[70vh] md:h-[80vh] lg:h-screen w-screen overflow-hidden">
      {/* Dynamic Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent 
        md:via-gray-900/50 lg:via-gray-900/30 z-0"
      ></div>

      <VideoBackground movieId={id} />

      <div
        className="absolute inset-0 flex flex-col justify-end items-start text-white z-10 
        px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16
        pb-12 sm:pb-16 md:pb-20 lg:pb-32"
      >
        <VideoData
          title={original_title}
          overview={overview}
          rating={vote_average}
          releaseDate={release_date}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full 
        h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44
        bg-gradient-to-t from-gray-900 to-transparent z-5"
      ></div>
    </div>
  );
};

export default MainContainer;
