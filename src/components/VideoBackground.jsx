/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerVideo, setTrailerVideo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMovieData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];

      // Ultra-clean YouTube embed
      setTrailerVideo(
        `https://www.youtube-nocookie.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1`
      );
    } catch (error) {
      console.error("Error fetching trailer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (movieId) getMovieData();
  }, [movieId]);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1] overflow-hidden bg-gray-900">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-800"></div>
          </div>
        </div>
      )}
      
      {/* Perfectly Fitted Trailer */}
      {trailerVideo && (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 
            min-w-[100vw] min-h-[100vh] object-cover"
            src={trailerVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            loading="eager"
          />
        </div>
      )}
      
      {/* Fallback Image */}
      {!trailerVideo && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm md:text-base">Trailer unavailable</span>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;