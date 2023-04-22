import "./adminMovies.css";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import MovieList from "./MovieList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Admin = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch("https://dev-cinemascope-api.azurewebsites.net/api/movies/");

  return (
    <main className="movies-admin">
      <button className="button-add">
        <Link to="/admin/movies/create" className="link-button">
          Agregar nueva <AddCircleIcon />
        </Link>
      </button>
      {error && <div>{error}</div>}
      {isLoading && <div class="lds-dual-ring"></div>}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Admin;
