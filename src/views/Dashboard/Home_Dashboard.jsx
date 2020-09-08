import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import Project from "../Projects/projects";
import GridItem from "components/Grid/GridItem.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, Paper, Button } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(styles);

const Home_Dashboard = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const data = [
    {
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
    {
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
    {
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
  ];
  const skills = ["C", "C++", "Java", "Python", "PHP  "];
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
          <Grid container>
            <GridItem item lg={12} className={classes.profilePic}>
              <AccountCircleIcon style={{ fontSize: "21vh" }} />
            </GridItem>
            <GridItem item lg={12} className={classes.profilePic}>
              <p> Krushna Nayse </p>
            </GridItem>
            <GridItem item lg={12} className={classes.profilePic}>
              <p> Pune Institute Of Computer Technology, Pune.</p>
            </GridItem>
            <GridItem
              item
              lg={12}
              style={{
                display: 1 ? "display" : "none",
              }}
              className={classes.profilePic}
            >
              <p> krushnanayse1@gmail.com</p>
            </GridItem>
            <GridItem item lg={12} className={classes.profilePic}>
              <Button style={{ display: 1 ? "display" : "none" }}>
                <LinkedInIcon />
              </Button>
              <Button style={{ display: 1 ? "display" : "none" }}>
                <GitHubIcon />
              </Button>
            </GridItem>

            <GridItem
              item
              xs={12}
              lg={3}
              sm={12}
              style={{ marginTop: 20, marginLeft: 10 }}
            >
              <Paper className={classes.paper} style={{ padding: "5px" }}>
                <h3 style={{ marginLeft: 20 }}>
                  <b>Skills</b>
                </h3>
                <p>
                  <ul>
                    {skills.map((Entry, index) => (
                      <li>{Entry}</li>
                    ))}
                  </ul>
                </p>
              </Paper>
            </GridItem>

            <GridItem
              item
              xs={12}
              lg={7}
              sm={12}
              style={{ marginTop: 20, marginLeft: 10 }}
            >
              <Paper className={classes.paper} style={{ padding: "5px" }}>
                <h3 style={{ padding: 10, paddingLeft: 25 }}>
                  <b>Projects</b>
                </h3>

                <Project classes={classes} data={data}></Project>
                {/* <Project classes={classes} data={data}></Project>
                <Project classes={classes} data={data}></Project> */}
              </Paper>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home_Dashboard;
