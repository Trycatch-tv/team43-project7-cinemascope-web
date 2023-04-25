import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";

import ConfirmDialog from "./ConfirmDialog";

const MovieList = ({ movies }) => {
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false });
  const [movieList, setMovieList] = useState(movies);

  const handleClickDelete = (movieId) => {
    setConfirmDialog({
      isOpen: false,
    });
    fetch(
      "https://dev-cinemascope-api.azurewebsites.net/api/movies/admin/" +
      movieId,
      {
        method: "DELETE",
      }
    ).then(() => {
      // Actualiza la lista de películas después de eliminar una película
      setMovieList(movieList.filter((movie) => movie.movie_id !== movieId));
    });
  };

  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <div className="movie-preview" key={movie.movie_id}>
          <div className="buttons-container">
            <button className="buttons-edit-delete">
              <Link to={`/admin/movies/${movie.movie_id}`}>
                <EditIcon className="icon-admin" />
              </Link>
            </button>
            <button
              onClick={() =>
                setConfirmDialog({
                  isOpen: true,
                  onConfirm: () => {
                    handleClickDelete(movie.movie_id);
                  },
                })
              }
              className="buttons-edit-delete"
            >
              <DeleteIcon className="icon-admin" />
            </button>
          </div>
          <div className="single-movie">
            <img
              className="movie-poster"
              src={movie.cover_url}
              alt={movie.title + " poster"}
            />
            <p className="movie-title">{movie.title}</p>
            <p className="movie-year">{movie.release_date}</p>
          </div>
        </div>
      ))}
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default MovieList;