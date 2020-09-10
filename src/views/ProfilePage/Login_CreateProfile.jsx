import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/createProfile.js";
import { Grid } from "@material-ui/core";
import Checkout from "./Checkout";

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
        <div
          style={{ flexGrow: "1", width: "100%" }}
          className={classes.container}
        >
          <Grid container xs={12} lg={12} sm={12}>            
            <Checkout/>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Login_CreateProfile;
