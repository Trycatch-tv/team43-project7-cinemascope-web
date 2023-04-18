import React, { useEffect, useState } from "react";
import * as MoviesServer from "../movies/MoviesServer";
import './MovieDetails.css'

const MovieDetails = (props) => {
    const [movies, setMovies] = useState([]);
    const [movieData, setMovieData] = useState(null);
  
    const listMovies = async () => {
      try {
        const res = await MoviesServer.AllMovies();
        const data = await res.json();
        console.log(data.body);
        setMovies(data.body);
        setMovieData(data.body[0]);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      listMovies();
    }, []);
    return (
        
        <section className="movie">
        {movieData && (
            <React.Fragment>
                <div className='movie-details'>
                    <div className="movie-poster">
                        <img src={movieData.cover_url} alt={movieData.title}></img>
                    </div>
                    <div className='movie-elements'>
                        <h2 className='movie-title'>{movieData.title}</h2>
                        <p className='movie-year'>{movieData.release_date}</p>
                        <div className='movie-details-time'>
                            <p className='movie-duration'>Duration</p>
                            <p className='movie-genere'>Genere</p>
                        </div>
                        <div className='movie-rating'>
                            <img src="/img/estrella.png" alt="start"></img>
                            <p>Rating</p>
                        </div>
                        <p className='movie-description'>{movieData.synopsis}</p>
                        <div className='buttons-movies-details'>
                            <il><a className='movies-buttons-white' href='#'>Add to watchlist</a></il>
                            <il><a className='movies-buttons-red' href='#'>Rage</a></il>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )}
        </section>
    );
}

export default MovieDetails