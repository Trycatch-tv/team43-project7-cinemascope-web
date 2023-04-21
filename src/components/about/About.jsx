import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import TeamCard from "./TeamCard.jsx";
import dataTeam from "./team.json";
import "./about.css";

const About = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    listTeam();
  }, []);
  const listTeam = async () => {
    try {
      const data = dataTeam;
      //   console.log(data);
      setTeamData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="about">
      <div className="container-fluid grid-container">
        <h1>Sobre nosotros</h1>
        <p>
          CinemaScope es una herramienta completa para los amantes del cine, que
          les permitirá organizar, editar y acceder a información detallada
          sobre sus películas favoritas. La plataforma cuenta con una interfaz
          intuitiva y fácil de usar, que permite a los usuarios registrar y
          editar películas, ingresando información clave como el título, género,
          año, director y sinopsis, entre otros. También podrán agregar imágenes
          y trailers de las películas, para hacer más completa su experiencia.
          Además, la aplicación web ofrece un listado completo de las películas
          registradas, con la posibilidad de filtrar y buscar por género, año,
          director, título y otros criterios. Los usuarios podrán acceder a la
          información detallada de cada película, donde se incluyen los detalles
          técnicos, sinopsis, elenco, críticas y calificaciones.
        </p>
        <Grid
          container
          spacing={{ xs: 5, md: 2 }}
          columns={{ xs: 1, sm: 6, md: 18 }}
          justifyContent="center"
        >
          {teamData.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
