import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from "react";
import * as MoviesServer from "../movies/MoviesServer";
import "./MoviesDisplay.css"

const MoviesDisplay = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  
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

    const handleNextMovie = () => {
        setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }

    const handlePrevMovie = () => {
        setCurrentMovieIndex(prevIndex => (prevIndex - 1 + movies.length) % movies.length);
    }

    const currentMovieData = movies[currentMovieIndex];

    return (
        <div className="movies-display">
            {currentMovieData && (
                <>
                    <h2 className='section-title'>Novedades</h2>
                    <div className="movies-list">
                        <ArrowBackIosNewIcon className='movie-buttom' onClick={handlePrevMovie} />
                        <div className="single-movie">
                            <div className="movie-poster">
                                <img src={currentMovieData.cover_url} alt={currentMovieData.title}></img>
                            </div>
                            <p className="movie-title">{currentMovieData.title}</p>
                            <p className="movie-year">{currentMovieData.year}</p>
                            <div className='movie-rating_1'>
                                <img src="/img/comentario.png" alt="commit"></img>
                                <img src="/img/estrella.png" alt="start"></img>
                            </div>
                            <p className="movie-ver">Ver más</p>
                        </div>
                        <ArrowForwardIosIcon className='movie-buttom' onClick={handleNextMovie} />
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviesDisplay;

