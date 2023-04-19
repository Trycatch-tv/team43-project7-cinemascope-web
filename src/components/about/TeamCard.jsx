import React from "react";
import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./about.css";

const TeamCard = ({ team }) => {
  return (
    <Grid item xs={2} sm={2} md={4}>
      <Card className="item">
        <CardMedia  sx={{ height: 250 }} image={team.image} />
        <CardContent className="label">
          <h2>{team.name}</h2>
          <hr />
          <h5>{team.position}</h5>
          <IconButton onClick={() => window.open(team.linkedIn, "_blank")}>
            {" "}
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => window.open(team.gitHub, "_blank")}>
            {" "}
            <GitHubIcon color="secondary" />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamCard;
