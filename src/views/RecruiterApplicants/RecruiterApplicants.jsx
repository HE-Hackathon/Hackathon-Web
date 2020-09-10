 
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import ApplicantCard from "./ApplicantCard";
const RecruiterApplicants = (props) => {
  const { ...rest } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const data = [
    {
      name: "Yash Agarwal",
      percentMatch: "90%",
      viewProfile: "fdi0we902",
    },
    {
      name: "Yash Agarwal",
      percentMatch: "32%",
      viewProfile: "fdi0we902",
    },
    {
      name: "Yash Agarwal",
      percentMatch: "32%",
      viewProfile: "fdi0we902",
    },
    {
      name: "Tanmay",
      percentMatch: "92%",
      viewProfile: "fdi0we902",
    },
  ];
  console.log("RA-Data" + data);
  return (
    <div>
      <Header
        brand="Welcome to Recruit-a-thon"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        {...rest}
      />
      <div className={classes.pageHeader}>
        <div
          style={{ flexGrow: "1", width: "100%" }}
          className={classes.container}
        >
          <h3 style={{ margin: 10 }}>List of Applicants</h3>

          <ApplicantCard classes={classes} data={data} />
        </div>
      </div>
    </div>
  );
};
export default RecruiterApplicants;