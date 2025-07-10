import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(setNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
      // You could dispatch an error action here if needed
      // dispatch(setMoviesError(error.message));
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]); // Added dispatch to dependencies

  return null; // Custom hooks should return something or nothing
};

export default useNowPlayingMovies;