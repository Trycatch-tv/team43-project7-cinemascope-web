import "./genBar.css"
import Botones from "../buttons";

const GenreBar = (props) => {
  return (
    <section className="genre-bar">
      <ul className="genre-bar-elements">
        <Botones url="#" titulo="Populares"></Botones>
        <Botones url="#" titulo="Acción"></Botones>
        <Botones url="#" titulo="Comedia"></Botones>
        <Botones url="#" titulo="Ciencia ficción"></Botones>
        <Botones url="#" titulo="Fantasía"></Botones>
        <Botones url="#" titulo="Romance"></Botones>
      </ul>
    </section>
  );
}

export default GenreBar;