import "./adminMovies.css";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import MovieList from "./MovieList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Admin = () => {
  // TODO: REPLACE WITH REAL DATA
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/movies");

  return (
    <main className="movies-admin">
      <Link to="/admin/movies/create" className="link-button">
        <button className="button-add">
          Agregar nueva <AddCircleIcon />
        </button>
      </Link>
      {error && <div>{error}</div>}
      {isLoading && <div class="lds-dual-ring"></div>}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Admin;
