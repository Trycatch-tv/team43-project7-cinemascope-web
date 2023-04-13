import "./Header.css"
import Botones from "../botones"


const Header = () => {
    return <div class="cabecera">
            <img class="cabecera_logo" src="/img/logo-CinemaScope.png" alt="logo_CinemaScope"></img>
                <div class="cabecera_tipo">
                    <Botones url="#" titulo="Series"></Botones>
                    <Botones url="#" titulo="Películas"></Botones>

                </div>
                <div class="cabecera_buscador">
                    <nav class="buscador">
                        <input type="text" placeholder=" "></input>
                    </nav>
                </div>
                <div class="cabecera_elementos">
                    <Botones url="#" titulo="Filtro"></Botones>
                    <Botones url="#" titulo="Login"></Botones>
                </div>
        </div>
}

export default Header 