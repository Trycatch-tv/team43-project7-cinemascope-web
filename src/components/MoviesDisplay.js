import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MoviesDisplay = () => {
    return ( 
        <div className="movies-display">
            <p>Novedades</p>
            <div className="movies-list">
                <ArrowBackIosNewIcon />
                <div className="single-movie">
                    <div className="movie-poster">your movie poster here</div>
                    <p className="movie-title">movie title</p>
                    <p className="movie-year">year</p>
                </div>
                <div className="single-movie">
                    <div className="movie-poster">your movie poster here</div>
                    <p className="movie-title">movie title</p>
                    <p className="movie-year">year</p>
                </div>
                <ArrowForwardIosIcon />
            </div>
        </div>

     );
}
 
export default MoviesDisplay