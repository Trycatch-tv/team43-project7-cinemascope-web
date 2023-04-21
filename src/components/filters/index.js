import "./filters.css";

import SearchBar from "../SearchBar";

const FiltersMovie = () => {
  return (
    <div className="filter-bar">
      <div className="filter-options">
        <p>Término</p>
        <p>Año</p>
        <p>Género</p>
        <p>Puntaje</p>
        <p>Ordenar por</p>
        <SearchBar />
        <input placeholder={"Año"}></input>
        <input placeholder={"Genero"}></input>
        <input placeholder={"Puntaje"}></input>
        <input placeholder={"Ordenar por"}></input>
      </div>
      <button>Buscar</button>
    </div>
  );
};

export default FiltersMovie;
