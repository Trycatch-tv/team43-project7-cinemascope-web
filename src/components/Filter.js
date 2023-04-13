import SearchBar from "./SearchBar.js";

const Filter = () => {
    return (
        <div className="search-bar">
            <p>Término</p>
            <p>Año</p>
            <p>Género</p>
            <p>Puntaje</p>
            <p>Ordenar por</p>
            <SearchBar/>
            <input placeholder={'Año'}></input>
            <input placeholder={'Genero'}></input>
            <input placeholder={'Puntaje'}></input>
            <input placeholder={'Ordenar por'}></input>
        </div>
     );
}
 
export default Filter;