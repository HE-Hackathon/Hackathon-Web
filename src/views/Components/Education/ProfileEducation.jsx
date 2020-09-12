import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Paper, Button } from "@material-ui/core";
import EducationModal from "../ProfileModals/EducationModal";
import moment from "moment";
import { useSelector } from "react-redux";

const ProfileEducation = (props) => {

  const isRecruiter = useSelector(state=>state.login).user.isRecruiter;  

  const styles = {
    fontFamily: "Arial",
    fontSize: "1em",
    margin: 10,
    // marginTop: 20,
  };
  console.log(props.data);
  return (
    <div>
      <EducationModal
        open={props.open}
        handleEdit={props.handleEdit}
        close={props.close}
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
            <b>Education</b>
          </h3>
        </GridItem>
        <GridItem
          container
          item
          lg={6}
          alignItems="center"
          justify="flex-end"

        >
          {isRecruiter ? "" : <EditIcon onClick={props.handleEdit} /> }
        </GridItem>
      </Grid>
      <Grid direction="column" container xs={12} lg={12} sm={12} style={styles}>
        <GridItem>
          <ul>
            {props.data === undefined ? " " : props.data.map((value, index) => (
              <li>
                <div>
                  <h5>{value.name}</h5>
                  <p>
                    {value.course},{value.degree}
                  </p>
                  <p>
                    ( {moment(value.start_year).format("YYYY")} -
                    {moment(value.end_year).format("YYYY")})
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
