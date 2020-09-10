import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Paper, Button } from "@material-ui/core";
const ProfileSkills = (props) => {
  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
    margin: 10,
    // marginTop: 20,
  };
  return (
    <div>
      <Grid direction="row" container xs={12} lg={12} sm={12} style={styles}>
        <GridItem
          container
          item
          lg={6}
          alignItems="center"

          // className={classes.profilePic}
        >
          <h3>
            <b>Skills</b>
          </h3>
        </GridItem>
        <GridItem
          container
          item
          lg={6}
          alignItems="center"
          justify="flex-end"

          // className={classes.profilePic}
        >
          <EditIcon />
        </GridItem>
      </Grid>
      <Grid direction="column" container xs={12} lg={12} sm={12} style={styles}>
        <GridItem>
          <ul>
            {props.data.map((Skill, index) => (
              <li>{Skill}</li>
            ))}
          </ul>
        </GridItem>
      </Grid>
    </div>
    // <br />
    // <ul>
    //   {props.data.map((Skill, index) => (
    //     <li>{Skill}</li>
    //   ))}
    // </ul>
  );
};

export default ProfileSkills;