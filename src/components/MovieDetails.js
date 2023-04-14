const MovieDetails = () => {
    return ( 
        <section className="movie">
            <div className="movie-poster"> Movie poster here</div><div>
            <h1>Movie title</h1>
            <p>year</p>
            <div>
                <p>duration</p>
                <p>|</p>
                <p>genre</p>
            </div>
            <p>rating</p>
            <p>movie description</p>
            <div>
                <button>Add to watchlist</button>
                <button className="button-rate">Rate</button>
            </div>
        </div></section>
     );
}
 
export default MovieDetails;