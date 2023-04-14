import SearchBar from './components/SearchBar.js';
import SearchIcon from '@mui/icons-material/Search';

const HeaderBar = () => {
    return ( 
        <header><img src="" alt="logo" />
            <div className="search-header">
            <SearchBar />
            <SearchIcon />
            </div>
            <div>
                <p>filtro</p>
                <a href="/login">login</a>
            </div>
        </header>
     );
}
 
export default HeaderBar;
