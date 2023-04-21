import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";
import { useState } from "react";

const MovieList = ({ movies }) => {
  const handleClickDelete = (movieId) => {
    //TODO: RE RENDER PAGE AFTER DELETE
    fetch("http://localhost:8000/movies/" + movieId, {
      method: "DELETE",
    });
  };
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id}>
          <div className="buttons-container">
            <Link to={`/admin/movies/${movie.id}`}>
              <button className="buttons-edit-delete">
                <EditIcon className="icon-admin" />
              </button>
            </Link>
            <button
              onClick={() =>
                //TODO : RE RENDER PAGE AFTER DELETE
                handleClickDelete(movie.id)
              }
              className="buttons-edit-delete"
            >
              <DeleteIcon className="icon-admin" />
            </button>
          </div>
          <div className="movie-poster">your movie poster here</div>
          <p className="movie-title">{movie.title}</p>
          <p className="movie-year">{movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
