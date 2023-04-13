import SearchIcon from '@mui/icons-material/Search';
//import React, {useState} from 'react'

const SearchBar = () => {

//    const [searchInput, setSearchInput] = useState("");


    return ( 
        <div className="search-input">
                <input type="search" placeholder="Search here" />
                <div className="search-icon">
                    <SearchIcon />
                </div>
        </div>
     );
}
 
export default SearchBar;