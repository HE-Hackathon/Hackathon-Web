import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import Loading from "views/Components/Loading/Loading";
import { Grid } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import { useSelector } from "react-redux";
import ApplicantCard from "views/RecruiterApplicants/ApplicantCard";

const ViewDevelopers = (props) => {

  const login = useSelector(state=>state.login).user.data;
  const emailCheck =  localStorage.getItem('email');

  if( login === undefined && emailCheck === null ){
    props.history.push("/");
    window.location.reload();
  }


  const { ...rest } = props;
  const useStyles = makeStyles(styles);

  const [loading, handleLoading] = useState(true);
  const classes = useStyles();

  const baseUrl = "https://hackerearthhackathon.herokuapp.com";
  const feedUrl = "/filter";

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [data, setFeedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(baseUrl + feedUrl , options);
      
      setFeedData(prevState => [ ...res.data.data, ...prevState  ]);
      handleLoading(false);
    };
    fetchData();
  }, []);

  const handleProfileClick = (id) => {
      // console.log(id);
    props.history.push("/UserProfile", { id: id });
  };

  const path = props.location.pathname;

  const styleGrid = {
    margin: 15,
    padding: 10,
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center',
  };
  
  return (
    <div>
      <Grid container xs={12} lg={12} sm={12} direction="row">
        {loading ? (
          <Loading />
        ) : (
          <GridItem style={styleGrid} container item lg={12} sm={12} xs={12}>
            <GridItem style={styleGrid} container item lg={12} sm={12} xs={12}>
              <Grid
                container
                style={{
                  marginTop: 30,
                  paddingTop: 30,
                  fontSize: 20,
                  fontWeight: "bolder",
                }}
                xs={11}
                lg={11}
                sm={11}
                direction="row"
              >
                {path === "/viewdevelopers" ? "ALL DEVELOPERS" : "LIST OF APPLICANTS"}
              </Grid>
            </GridItem>

            <Grid container xs={12} lg={12} sm={12} direction="row">
              <ApplicantCard
                classes={classes}
                data={data}
                handleClick={(e, id) => handleProfileClick(e, id)}
                path = {path}
              />              
            </Grid>
          </GridItem>
        )}
      </Grid>
    </div>
  );
};
export default ViewDevelopers;

