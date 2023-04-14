import "./adminMovies.css"
import SingleMovieDisplay from '../SingleMovieDisplay.js';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from "react";


// TODO: REPLACE WITH REAL DATA


const Admin = () => {

    const [movies, setMovies]=useState([{title: "Movie 1", year: 2020, genre:"fiction", id:1}, 
                                        {title: "Movie 2", year: 1990, genre:"action", id:2}, 
                                        {title: "Movie 3", year: 1995, genre:"horror", id:3}, 
                                        {title: "Movie 4", year: 2010, genre:"action", id:4}, ]);

    return (
        <main className="movies-admin">
            <button className="button-add">Agregar nueva <AddCircleIcon/> </button>
            <div className="movies-display-admin">
                        {// ! here coding with array
                        movies.map((movie)=>(  
                                <div className="movie-preview" key={movie.id}>
                                    <div className="buttons-container">
                                        <button className="buttons-edit-delete"><EditIcon className="icon-admin" /></button>
                                        <button className="buttons-edit-delete"><DeleteIcon className="icon-admin" /></button>
                                    </div>
                                    <div className="movie-poster">your movie poster here</div>
                                    <p className="movie-title">{movie.title}</p>
                                    <p className="movie-year">{movie.year}</p>
                                </div>
                        ))}
            </div>
        </main>
    )
}

export default Admin