import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";
import "./MoviesDisplay.css"

import useFetch from '../admin/useFetch';
import { AllMovies } from '../movies/MoviesServer';

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
        <main className="movies-display">
            {error && <div>{error}</div>}
            {isLoading && <div class="lds-dual-ring"></div>}
            {movies && (
                <>
                    <h2 className='section-title'>Novedades</h2>
                    <div className="movies-list">
                        <ArrowBackIosNewIcon className='movie-buttom' onClick={handlePrevMovie} />
                        {movies.slice(currentMovieIndex,currentMovieIndex+5).map((movie) =>(
                            <div className="movie-preview" key={movie.cover_url}>
                                <div className="single-movie">
                                <div className="movie-poster">
                                    <img src={movie.cover_url} alt= {movie.title} className='poster'></img>
                                </div>
                                <p className="movie-title">{movie.title}</p>
                                <p className="movie-year">{movie.year}</p>
                                <div className='movie-rating_1'>
                                    <img src="/img/comentario.png" alt="commit"></img>
                                    <img src="/img/estrella.png" alt="start"></img>
                                </div>
                                <p className="movie-ver">Ver más</p>
                            </div>
                        </div>
                        ))}    
                        <ArrowForwardIosIcon className='movie-buttom' onClick={handleNextMovie} />
                    </div>
                    <h2 className='section-title'> All movies section</h2>
                    <div className='all-movies'>
                    {movies.map((movie) => (
                    <div className="movie-preview" key={movie.movie_id}>
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
                    </div>
                </>
            )}
        </main>)
    }
export default MoviesDisplay;
