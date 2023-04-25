import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from "react";
import "./MoviesDisplay.css"

import useFetch from '../admin/useFetch';

const MoviesDisplay = () => {
    
    const {
    data: movies,
    isLoading,
    error,
    } = useFetch("https://dev-cinemascope-api.azurewebsites.net/api/movies/");
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    const handleNextMovie = () => {
        setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }

    const handlePrevMovie = () => {
        setCurrentMovieIndex(prevIndex => (prevIndex - 1 + movies.length) % movies.length);
    }

    return(
        <div className="movies-display">
            {error && <div>{error}</div>}
            {isLoading && <div class="lds-dual-ring"></div>}
            {movies && (
                <>
                    <h2 className='section-title'>Novedades</h2>
                    <div className="movies-list">
                        <ArrowBackIosNewIcon className='movie-buttom' onClick={handlePrevMovie} />
                        <div className="single-movie">
                            <div className="movie-poster">
                                <img src={movies[currentMovieIndex].cover_url} alt= {movies[currentMovieIndex].title}></img>
                            </div>
                            <p className="movie-title">{movies[currentMovieIndex].title}</p>
                            <p className="movie-year">{movies[currentMovieIndex].year}</p>
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
        </div>)
    }
export default MoviesDisplay;
