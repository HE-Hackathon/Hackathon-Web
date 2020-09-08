import React, { useState } from "react";

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
      id : 1,
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
    {
      id : 2,
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
    {
      id : 3,
      name: "Meeting Room",
      technologies_used: "PHP,MYSQL",
      description:
        "This project allows users to register on the Meeting Room Booking Platform and helps them find a Meeting Room according to their preferences and book it. On successful booking or cancellation, an email is sent to the user.",
      link: "",
    },
  ];

  const [projectData,setProjectData]  = useState(data);

  const skills = ["C", "C++", "Java", "Python", "PHP  "];
  const education = [
    {
      name : "Pune Institute of Computer Technology",
      degree : "B.E Computer Science (2017 - 2021)",
      score : "9.5"
    },{
      name :"Maharshi Karve Stree Shikshan Samstha Cummins College of Engineering For Women, Pune",
      degree: " XII (Senior Secondary), Science  HSC BOARD",
      score : "85.64%"      
    }
  ];
  const [skilsData,setSkillsData] = useState(skills);
  const [educationData,setEducationData] = useState(education);
  //Funtions in this page
  const handleAddProject = () => {
    const object = {
      id : 4,
      name: "Gaming PUBG",
      technologies_used: "C++,JS",
      description:
        "While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes..",
      link: "",
    };
    setProjectData( oldProjectData => [ object, ...oldProjectData ] );
  }

  const handleProjectDelete = (id) => {
    const object = projectData.filter( obj => obj.id !== id );
    setProjectData(object);
  } 

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
          <Grid container xs = {12} lg={12} sm= {12} className ={classes.getCenter}>
            <GridItem 
                lg={10} 
                style={{ margin : 0 }} 
              >
              <GridItem 
                  item 
                  lg={12} 
                  xs = {12} 
                  sm = {10} 
                  // className={classes.profilePic}
                >
                <AccountCircleIcon style={{ fontSize: "21vh" }} />
              </GridItem>
              <GridItem 
                  item 
                  lg={12} 
                  // className={classes.profilePic}
                >
                <p> Krushna Nayse </p>
              </GridItem>
              <GridItem 
                  item 
                  lg={12} 
                  // className={classes.profilePic}
                >
                <p> Pune Institute Of Computer Technology, Pune.</p>
              </GridItem>
              <GridItem
                item
                lg={12}
                style={{ display: 1 ? "display" : "none" }}
                // className={classes.profilePic}
              >
                <p> krushnanayse1@gmail.com</p>
              </GridItem>
              <GridItem 
                  item 
                  lg={12} 
                  // className={classes.profilePic}
                >
                <Button style={{ display: 1 ? "display" : "none" }}>
                  <LinkedInIcon />
                </Button>
                <Button style={{ display: 1 ? "display" : "none" }}>
                  <GitHubIcon />
                </Button>
              </GridItem>
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
                    {skilsData.map((value, index) => (
                      <li>{value}</li>
                    ))}
                  </ul>
                </p>
              </Paper>
              <Paper className={classes.paper} style={{ padding: "5px", marginTop : 20 }}>
                <h3 style={{ marginLeft: 20 }}>
                  <b>Education</b>
                </h3>
                <p>                  
                    {educationData.map((value, index) => (
                      <ul>
                        <li>{value.name}</li>
                        <li>{value.degree}</li>
                        <li>{value.score}</li>
                      </ul>
                    ))}                  
                </p>
              </Paper>
            </GridItem>

            <Grid container              
              direction="row"
              xs={12}
              lg={7}
              sm={12}
              style={{ marginTop: 20 }}
            >
              <GridItem 
                  container 
                  item 
                  lg={6} 
                  style={{ padding: 10, paddingLeft: 25 }} 
                  alignItems ="center"
                >
                <p style={{ fontSize : 25, fontWeight : 'bolder' }}>PROJECTS</p>                
              </GridItem>
              <GridItem 
                  container 
                  item 
                  lg={6} 
                  justify="flex-end" 
                  alignItems ="center" 
                  style={{ padding: 10, marginBottom :10 }}
                >
                <Button variant="contained" color="primary" onClick={ handleAddProject } >Add New Project</Button>
              </GridItem>

              <Project classes={classes} data={projectData} handleDelete = { (e,id)=>handleProjectDelete(e,id) }></Project>

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home_Dashboard;
