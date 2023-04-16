import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./MoviesDisplay.css"

const MoviesDisplay = (props) => {
    return (
        <div className="movies-display">
            <h2 className='section-title'>Novedades</h2>
            <div className="movies-list">
                <ArrowBackIosNewIcon />
                <div className="single-movie">
                    <div className="movie-poster"> Movie poster here
                        <img src={props.poster} alt={props.movieTitle}></img>
                    </div>
                    <p className="movie-title">movie title</p>
                    <p className="movie-year">year</p>
                    <div className='movie-rating_1'>
                        <img src="/img/comentario.png" alt="commit"></img>
                        <img src="/img/estrella.png" alt="start"></img>
                    </div>
                    <p className="movie-ver">Ver más</p>
                </div>
                <ArrowForwardIosIcon />
            </div>
        </div>

    );
}

export default MoviesDisplay