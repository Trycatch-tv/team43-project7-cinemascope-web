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
        <br/>
        <blockquote>
          <p dir="auto">Este proyecto se ha realizado con fines educativos, sin ánimo de lucro y con el objetivo meramente de aprender sobre las tecnologías con las que se ha implementado. Forma parte de la iniciativa impulsada por <a href="https://linktr.ee/trycatch.tv" rel="nofollow">TryCatch.TV</a> (Aprendizaje colaborativo) para realizar proyectos de forma colaborativa con varios desarrolladores que están apuntando a mejorar sus habilidades en ciertas áreas y para aquellos que están en búsqueda de sus primeros empleos como desarrolladores de software.</p>
          <p dir="auto">Nosotros no somos responsables de cómo se use este proyecto ni de las consecuencias que puedan derivarse de su uso. Todos los participantes en este proyecto han contribuido de manera voluntaria y no se ha pagado a nadie por su colaboración. El código fuente de este proyecto se proporciona tal cual, sin garantías de ningún tipo.</p>
          <p dir="auto">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
        </blockquote>
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
