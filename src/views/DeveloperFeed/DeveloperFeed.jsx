import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/homeDashboard";
import DeveloperFeedCard from "./DeveloperFeedCard";
import GridItem from "components/Grid/GridItem.js";
import { Grid, Paper, Button, Typography } from "@material-ui/core";

import { useSelector } from 'react-redux';
import Loading from "views/Components/Loading/Loading";

const baseUrl = "https://hackerearthhackathon.herokuapp.com";
const feedUrl = "/jobs/";

const DeveloperFeed = (props) => {
  console.log("feed in");
  const { ...rest } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  const loginState = useSelector(state => state.login )
  const user_id = loginState.user.data._id;

  const [loading,setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [dataFeed, setFeedData] = useState([]);
  
  const fetchData = async () => {
    const res = await axios.get(baseUrl + feedUrl + user_id, options);
    setFeedData(res.data.data);     
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();    
  }, []);



  const styleGrid = {
    margin: 5,
    padding: 10,
    display :"flex",
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <Grid container >
      <Grid container xs={12} lg={12} sm={12} direction="row" >
        <GridItem style={styleGrid} container item lg={12} sm={12} xs={12} >
          {/* <Header
            brand="Welcome to Recruit-a-thon"
            rightLinks={<HeaderLinks />}
            fixed
            color="black"
            {...rest}
          /> */}
        </GridItem>   

        { loading ? <Loading/> :
        <Fragment>
            <GridItem style={styleGrid} container item lg={12} sm={12} xs={12} >
              <Grid container style={{ marginTop: 30, paddingTop : 30, fontSize : 20, fontWeight : 'bolder' }} xs={9} lg={9} sm={9} direction="row">
                  JOB OPENINGS  
              </Grid>      
            </GridItem>     

            <GridItem style={styleGrid} container item lg={12} sm={12} xs={12} >
              <Grid container xs={12} lg={12} sm={12} direction="row">           
                {dataFeed.map((value) => (
                  <GridItem
                    style={{
                      margin: 0,
                      padding: 10,
                      display :"flex",
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    container
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <DeveloperFeedCard classes={classes} data={value} />
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
        </Fragment>
        }  
      </Grid>
    </Grid>
  );
};

export default DeveloperFeed;
