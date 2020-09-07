import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";

import GridItem from "components/Grid/GridItem.js";
import { Grid, Paper } from "@material-ui/core";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(styles);

const Home_Dashboard = (props) => {

  const { ...rest } = props;
  const classes = useStyles();

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
        <div style={{ flexGrow:'1', width : '100%'}}  className={classes.container}>
            <Grid container>                
                <GridItem item xs={4} lg={2} sm={6} style={{ marginLeft : 30 }} className={classes.profilePic}>
                    <AccountCircleIcon style={{ fontSize : '21vh' }}/>
                </GridItem>
                <GridItem item xs={6} lg={6} sm={6}>
                    <Paper className={classes.paper}>BIO</Paper>
                </GridItem>
            </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home_Dashboard;
