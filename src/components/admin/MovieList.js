import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";
import { useState } from "react";

import ConfirmDialog from "./ConfirmDialog";

const MovieList = ({ movies }) => {
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false });

  const handleClickDelete = (movieId) => {
    //TODO: RE RENDER PAGE AFTER DELETE
    setConfirmDialog({
      isOpen: false,
    });
    fetch(
      "https://dev-cinemascope-api.azurewebsites.net/api/movies/admin/" +
        movieId,
      {
        method: "DELETE",
      }
    );
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
                {
                  setConfirmDialog({
                    isOpen: true,
                    onConfirm: () => {
                      handleClickDelete(movie.movie_id);
                    },
                  });
                }
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
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default MovieList;
