import "./header.css";
import Buttons from "../buttons";

const Header = () => {
  return (
    <div class="cabecera">
      <a href="/">
        <img
          class="cabecera_logo"
          src="/img/logo-CinemaScope.png"
          alt="logo_CinemaScope"
        ></img>
      </a>
      <div class="cabecera_tipo">
        <Buttons url="/" titulo="Películas"></Buttons>
        <Buttons url="/admin" titulo="Administración"></Buttons>
        <Buttons url="/about-us" titulo="Sobre nosotros"></Buttons>
      </div>
    </div>
  );
};

export default Header;
