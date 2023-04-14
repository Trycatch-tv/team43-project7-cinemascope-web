import SingleMovieDisplay from './SingleMovieDisplay.js';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MoviesDisplay = () => {
    return ( 
        <div className="movies-display">
            <p>Novedades</p>
            <div className="movies-list">
                <ArrowBackIosNewIcon />
                <SingleMovieDisplay />
                <SingleMovieDisplay />
                <SingleMovieDisplay />
                <SingleMovieDisplay />
                <ArrowForwardIosIcon />
            </div>
        </div>

     );
}
 
export default MoviesDisplay;