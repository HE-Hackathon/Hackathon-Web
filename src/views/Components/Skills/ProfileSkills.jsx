import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Paper, Button } from "@material-ui/core";
import SkillsModal from "./SkillsModal";
import { useSelector } from "react-redux";

const ProfileSkills = (props) => {
  const isRecruiter = useSelector(state=>state.login).user.isRecruiter
  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
    margin: 10,    
  };
  
  return (
    <div>
      <SkillsModal 
          open = {props.open}
          handleEdit = {props.handleEdit}
          close = {props.close}
          cancel={props.cancel}
          data={props.data} 
          classes={props.classes}
        />
      <Grid direction="row" container xs={12} lg={12} sm={12} style={styles}>
        <GridItem
          container
          item
          lg={6}
          alignItems="center"          
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

        >
          { isRecruiter ?  "" : <EditIcon onClick={props.handleEdit} /> }
        </GridItem>
      </Grid>
      <Grid direction="column" container xs={12} lg={12} sm={12} style={styles}>
        <GridItem>
          <ul>
            { props.data === undefined ? " " : props.data.map((Skill, index) => (
              <li>{Skill}</li>
            ))}
          </ul>
        </GridItem>
      </Grid>
    </div>

  );
};

export default ProfileSkills;