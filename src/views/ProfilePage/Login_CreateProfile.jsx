import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const Login_CreateProfile = (props) => {
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4} style={{ color: "black" }}>
              WORK IN PROGRESS
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Login_CreateProfile;
