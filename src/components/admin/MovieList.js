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
        <div className="movie-preview" key={movie.movie_id}>
          <div className="buttons-container">
            <button className="buttons-edit-delete">
              <Link to={`/admin/movies/${movie.movie_id}`}>
                <EditIcon className="icon-admin" />
              </Link>
            </button>
            <button
              onClick={() =>
                //TODO : RE RENDER PAGE AFTER DELETE
                handleClickDelete(movie.movie_id)
              }
              className="buttons-edit-delete"
            >
              <DeleteIcon className="icon-admin" />
            </button>
          </div>
          <img
            className="movie-poster"
            src={movie.cover_url}
            alt={movie.title + " poster"}
          />
          <p className="movie-title">{movie.title}</p>
          <p className="movie-year">{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
