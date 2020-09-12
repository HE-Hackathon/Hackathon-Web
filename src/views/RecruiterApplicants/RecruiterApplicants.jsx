import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import ApplicantCard from "./ApplicantCard";

const RecruiterApplicants = (props) => {
  const { ...rest } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const postId = props.location.state.id;

  const baseUrl = "https://hackerearthhackathon.herokuapp.com";
  const feedUrl = "/ViewApplicants/";

  const options = {    
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [data, setFeedData] = useState([]);
  useEffect(async () => {
    const res = await axios.get(baseUrl + feedUrl + postId, options); 
    setFeedData(res.data.candidates);
  }, []);

  // const data = dataApp.data.candidates;
  const handleProfileClick = (id) =>{
    props.history.push("/UserProfile", { id : id } );
  }
  return (
    <div>
      {/* <Header
        brand="Welcome to Recruit-a-thon"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        {...rest}
      /> */}
      <div className={classes.pageHeader}>
        <div
          style={{ flexGrow: "1", width: "100%" }}
          className={classes.container}
        >
          <h3 style={{ margin: 10 }}>List of Applicants</h3>

          <ApplicantCard 
              classes={classes} 
              data={data} 
              handleClick={(e,id)=>handleProfileClick(e,id)} 
            />
        </div>
      </div>
    </div>

  );
};
export default RecruiterApplicants;
