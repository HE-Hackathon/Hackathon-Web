import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { Grid, Tooltip } from "@material-ui/core";
import { useSelector } from "react-redux";

const ProfileAchievements = (props) => {
  const styles = {
    fontFamily: "Arial",
    fontSize: "1.2em",
    marginLeft: 10,
    // border: "2px solid blue",
  };
  const isRecruiter = useSelector(state=>state.login).user.isRecruiter

  const classes = props.classes;
  return (
    <Grid xs={12} lg={12} >

      {props.data.map((value, index) => (
        <GridItem item lg={12} sm={5} xs={5} style={styles}>
          <Card key={value.id} className={classes.root} style={{ padding: 10 }}>
          <CardHeader
              action={
                 isRecruiter ? "" : 
                <Tooltip title="Delete Achievement">
                <DeleteIcon
                  onClick = { () => props.handleDelete(value.id) }                   
                  style={{ marginRight: 5, cursor : "pointer" }}                  
                ></DeleteIcon>
                </Tooltip>
              }
              title={value.name}
            />

            <CardContent>
              <Typography variant="body2" color="black" component="p">
                <br />
                <p>{value.description ? <p>{value.description}</p> : null}</p>
              </Typography>
            </CardContent>
          </Card>
          <br />
        </GridItem>
      ))}
      ;
    </Grid>
  );
};
export default ProfileAchievements;