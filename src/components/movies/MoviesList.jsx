import { useEffect, useState } from "react";

import * as MoviesServer from "./MoviesServer.js";
const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  
  const listMovies = async () => {
    try {
      const res = await MoviesServer.AllMovies();
      const data = await res.json();
      console.log(data.body);
      setMovies(data.body);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listMovies();
  }, []);
//   return (
    
//   );
};

export default MoviesList;
