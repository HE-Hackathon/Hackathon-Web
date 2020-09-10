import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

const ProfileAchievements = (props) => {
  const styles = {
    fontFamily: "Arial",
    fontSize: "1.2em",
    // margin: 10,
    // border: "2px solid blue",
  };
  const classes = props.classes;
  return (
    <GridItem
      container
      item
      lg={12}
      //   style={{ padding: 10, paddingLeft: 25 }}
      //   alignItems="center"
    >
      {props.data.map((value, index) => (
        <GridItem item lg={12} sm={5} xs={5} style={styles}>
          <Card key={index} className={classes.root} style={{ padding: 10 }}>
            <CardHeader
              action={
                <DeleteIcon
                  onClick={() => props.handleDelete(value.id)}
                  style={{ marginRight: 3 }}
                ></DeleteIcon>
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
    </GridItem>
  );
};
export default ProfileAchievements;