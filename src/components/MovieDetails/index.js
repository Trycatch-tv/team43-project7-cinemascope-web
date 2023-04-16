import './MovieDetails.css'

const MovieDetails = (props) => {
    return (
        <section className="movie">
            <div className='movie-details'>
                <div className="movie-poster"> Movie poster here
                    <img src={props.poster} alt={props.movieTitle}></img>
                </div>
                <div className='movie-elements'>
                    <h2 className='movie-title'>Movie tittle</h2>
                    <p className='movie-year'>Year</p>
                    <div className='movie-details-time'>
                        <p className='movie-duration'>Duration</p>
                        <p className='movie-genere'>Genere</p>
                    </div>
                    <div className='movie-rating'>
                        <img src="/img/estrella.png" alt="start"></img>
                        <p>Rating</p>
                    </div>
                    <p className='movie-description'>movie description</p>
                    <div className='buttons-movies-details'>
                        <il><a className='movies-buttons-white' href='#'>Add to watchlist</a></il>
                        <il><a className='movies-buttons-red' href='#'>Rage</a></il>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails