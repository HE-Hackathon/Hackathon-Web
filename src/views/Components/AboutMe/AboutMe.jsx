import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, Paper, Button } from "@material-ui/core";
const AboutMe = (props) => {
  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
  };
  return (
    // <div>
    <GridItem
      item
      lg={12}
      xs={12}
      sm={12}
      style={{ margin: 10 }}
      // className={classes.profilePic}
    >
      <AccountCircleIcon
        style={{ fontSize: "21vh", marginLeft: "flex-start" }}
      />
      <br />
      <h3>{props.data.name}</h3>
      <br />
      <p style={styles}>{props.data.bio}</p>
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
    </GridItem>
    // </div>
  );
};
export default AboutMe;