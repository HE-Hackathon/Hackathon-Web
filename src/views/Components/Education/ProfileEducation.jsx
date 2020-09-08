import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Paper, Button } from "@material-ui/core";
const ProfileEducation = (props) => {
  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
    margin: 10,
    // marginTop: 20,
  };
  console.log(props.data);
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
            <b>Education</b>
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
            {props.data.map((value, index) => (
              <li>
                <div>
                  <h5>{value.name}</h5>
                  <p>
                    {value.course},{value.degree}
                  </p>

                  <p>Score: {value.score}</p>
                </div>
              </li>
            ))}
          </ul>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ProfileEducation;
