import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import Project from "../Projects/projects";
import GridItem from "components/Grid/GridItem.js";


import { Grid, Button } from "@material-ui/core";
import AboutMe from "../Components/AboutMe/AboutMe";
import ProfileSkills from "../Components/Skills/ProfileSkills";
import WorkEx from "../Components/WorkEx/WorkEx";

import ProfileAchievements from "../Components/ProfileAchievements/ProfileAchievements";
import ProfileEducation from "../Components/Education/ProfileEducation";

import { useSelector } from 'react-redux';
import axios from 'axios';
import Loading from "views/Components/Loading/Loading";

const useStyles = makeStyles(styles);

const baseUrl = "https://hackerearthhackathon.herokuapp.com";
const profile = "/profile"
const options = {
  headers : {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin" : "*"
  }
};

const UserProfile = (props) => {

  const login = useSelector(state=>state.login).user.data;
  const emailCheck =  localStorage.getItem('email');

  if( login === undefined && emailCheck === null ){
    props.history.push("/");
    window.location.reload();
  }
  
  const { ...rest } = props;
  const classes = useStyles();
    
  const user_data = useSelector(state=>state.login)  
  const userdata = {
    id : props.location.state.id
  }

  const [data, handleData] = useState([{}]);
  const [loading,handleLoading] = useState(true);
  useEffect(()=>{
    const fetchData = async() =>{
      const res = await axios.post( baseUrl + profile ,userdata, options);      
      handleData(res.data.data);
      handleLoading(false);
    }

    fetchData();    
  },[])


  const workexData = data.workex;
  const projectData = data.projects;
  const achievementData = data.achievements;
  const educationData = data.education;
  const skillsData = data.skills;
  const profileInfo = {
    name: data.name,
    linkedin: data.linkedin,
    github: data.github,
    bio: data.bio      
  };  
  
  

  //Funtions in this page

  // WORK EXPERIENCE

  const handleWorkexDelete = () => {}  

  // PROJECTS
  const handleProjectDelete = () => {}  

  // ACHIEVEMENTS
  const handleAchievementDelete = () => {}  

  //Skills  
  const openSkillsModal = () => {}
  const closeSkillsModal = () => {} 


  //Education
  
  const openEducationModal = () => {}
  const closeEducationModal = () => {};

  return (
    <div >   
      {loading ? <Loading /> :  
      <div className={classes.pageHeader}  >
        <div
          style={{ flexGrow: "1", width: "100%", height: '100vh'  }}
          className={classes.container}
        >
          <Grid container xs={12} lg={12} sm={12} direction="row" style={{background : "#eee"}}  >
            <GridItem container item lg={4} sm={12} xs={12}>
              <Grid
                spacing={3}
                direction="column"
                container
                xs={12}
                lg={12}
                sm={12}
              >
                <GridItem style={{ background: "#fff", marginLeft :20 }}>                  
                  <AboutMe data={profileInfo} />
                </GridItem>
                <GridItem style={{ background: "#fff", marginLeft: 20, marginTop : 20 }}>                  
                  <ProfileSkills 
                    open = {false}
                    handleEdit = {openSkillsModal}
                    close = {closeSkillsModal}
                    data={skillsData} 
                    classes={classes}
                     
                  />
                </GridItem>
                <GridItem style={{ background: "#fff", marginLeft: 20, marginTop : 20 }}>                  
                <ProfileEducation
                    data={educationData}
                    open={false}
                    close={closeEducationModal}
                    handleEdit={openEducationModal}
                    classes={classes}
                  />
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem container item lg={8} sm={12} xs={12}>
              <Grid
                direction="column"
                container
                xs={12}
                lg={12}
                sm={12}
              >
                <Grid
                  direction="row"
                  container
                  xs={12}
                  lg={12}
                  sm={12}
                  style={{ maxHeight: 40 }}
                >
                  <GridItem
                    container
                    item
                    lg={6}
                    sm={12}
                    xs={12}
                    style={{
                      padding: 10,
                      paddingLeft: 25,
                      marginTop: 10,
                    }}
                  >
                    <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                      Work Experience
                    </p>                   
                  </GridItem>                  

                  <WorkEx 
                    data={workexData} 
                    classes={classes} 
                    handleDelete={(e, id) => handleWorkexDelete(e, id)}
                    />

                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Projects ********************** */}

                  <Grid
                    container
                    direction="row"
                    xs={12}
                    lg={12}
                    sm={12}                    
                  >
                    <GridItem
                      container
                      item
                      lg={6}
                      style={{ paddingLeft: 25 }}
                      alignItems="center"
                    >
                      <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                        PROJECTS
                      </p>                      
                    </GridItem>

                    <Project
                      classes={classes}
                      data={projectData}
                      handleDelete={(e, id) => handleProjectDelete(e, id)}
                    ></Project>
                  </Grid>
                  
                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Achievements@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

                  <Grid
                    container
                    direction="row"
                    xs={12}
                    lg={12}
                    sm={12}                    
                  >
                    <GridItem
                      container
                      item
                      lg={6}
                      style={{ paddingLeft: 25 }}
                      alignItems="center"
                    >
                      <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                        Achievements
                      </p>                     
                    </GridItem>                   

                    <ProfileAchievements
                      classes={classes}
                      data={achievementData}
                      handleDelete={(e, id) => handleAchievementDelete(e, id)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
        </div>
      </div>
      }
    </div>
  );
};

export default UserProfile;