import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button, Grid } from "@material-ui/core";

const AboutMe = (props) => {

  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
  };
  
  return (
    <GridItem
      item
      direction= "column"
      lg={12}
      xs={12}
      sm={12}
      style={{ display : "flex", justifyContent: 'center', alignItems: 'center', }}
    >
      <AccountCircleIcon
        style={{ fontSize: "21vh", marginLeft: "flex-start" }}
      />
      <br />
      <h3>{props.data.name}</h3>
      <br />
      <p style={styles}>{props.data.bio}</p>
      <Grid>
      <Button
        style={{ display: 1 ? "display" : "none" }}
        href={props.data.linkedin}
      >
        <LinkedInIcon />
      </Button>
      <Button
        style={{ display: 1 ? "display" : "none" }}
        href={props.data.github}
      >
        <GitHubIcon />
      </Button>
      </Grid>
    </GridItem>
    // </div>
  );
};
export default AboutMe;