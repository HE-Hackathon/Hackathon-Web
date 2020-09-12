import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import Project from "../Projects/projects";
import GridItem from "components/Grid/GridItem.js";


import { Grid, Button } from "@material-ui/core";
import WorkExModal from "../Components/ProfileModals/WorkExModal";
import ProjectModal from "../Components/ProfileModals/ProjectModal";
import AchievementsModal from "../Components/ProfileModals/AchievementsModal";
import AboutMe from "../Components/AboutMe/AboutMe";
import ProfileSkills from "../Components/Skills/ProfileSkills";
import WorkEx from "../Components/WorkEx/WorkEx";
import ProfileAchievements from "../Components/ProfileAchievements/ProfileAchievements";
import ProfileEducation from "../Components/Education/ProfileEducation";

import { useSelector } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles(styles);

const baseUrl = "https://hackerearthhackathon.herokuapp.com";
const options = {
  headers : {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin" : "*"
  }
};

const Home_Dashboard = (props) => {
  const login = useSelector(state=>state.login).user.data;
  const emailCheck =  localStorage.getItem('email');

  if( login === undefined && emailCheck === null ){
    props.history.push("/");
    window.location.reload();
  }

  const { ...rest } = props;
  const classes = useStyles();
  const loginState = useSelector(state=>state.login);
  
  const user_data = useSelector(state=>state.login)
  const profileWorkEx = user_data.user.data.workex;
  const data = user_data.user.data.projects;
  const achievements = user_data.user.data.achievements;
  const education = user_data.user.data.education;
  const profileSkills = user_data.user.data.skills;
  const profileInfo = {
    name: user_data.user.data.name,
    linkedin: user_data.user.data.linkedin,
    github: user_data.user.data.github,
    bio: user_data.user.data.bio      
  };  

  const [projectData, setProjectData] = useState(data);
  const [skilsData, setSkillsData] = useState(profileSkills);
  const [workexData,setWorkexData] = useState(profileWorkEx);
  const [achievementData,setAchievementData] = useState(achievements);
  const [educationData, setEducationData] = useState(education);
  const [loading,setLoading] = useState(false);
  // const [educationData, setEducationData] = useState(education);

  //Funtions in this page

  // WORK EXPERIENCE
  const [WorkExModalOpen, UpdateWorkExModal] = useState(false);

  const handleAddWorkEx = () => UpdateWorkExModal(true);
  const closeWorkExModal = (value) => {    
    setLoading(true);
    const data = {
      id : loginState.user.data._id,
      data : value,
      type : 2
    }
    
    axios.post(baseUrl + "/add", data, options)
      .then(res=>{
          const id = res.data.id;
          value.id = id;
          setWorkexData(prevState=>[ value, ...prevState ]);
          setLoading(false);
          UpdateWorkExModal(false);          
      });    
  };
  const cancelWorkModal = () => UpdateWorkExModal(false); 
  const handleWorkexDelete = (id) => {
    
    const data = {
      user_id : loginState.user.data._id,
      id : id,    
      type : 2
    }

    console.log(data);
    axios.post(baseUrl + "/delete", data, options)
      .then(res=>{
          if(res.data.msg===100){
            const object = workexData.filter((obj) => obj.id !== id);
            setWorkexData(object);            
          }          
      });
  };  



  // PROJECTS
  const [ProjectModalOpen, UpdateProjectModal] = useState(false);
  const openAddProject = () =>  UpdateProjectModal(true);
  
  const closeProjectModal = (value) => {

    setLoading(true);
    const data = {
      id : loginState.user.data._id,
      data : value,
      type : 0
    }   
    
    axios.post(baseUrl + "/add", data, options)
      .then(res=>{
          const id = res.data.id;
          value.id = id;
          setProjectData(prevState=>[ value, ...prevState ]);
          setLoading(false);
          UpdateProjectModal(false);          
      });       
  };
  const cancelProjectModal = () => UpdateProjectModal(false);
  const handleProjectDelete = (id) => {
    
    const data = {
      user_id : loginState.user.data._id,
      id : id,    
      type : 0
    }

    console.log(data);
    axios.post(baseUrl + "/delete", data, options)
      .then(res=>{
          if(res.data.msg==100){
            const object = projectData.filter((obj) => obj.id !== id);
            setProjectData(object);            
          }          
      });
  };  
  
   


  // ACHIEVEMENTS
  const [AchievementsModalOpen, UpdateAchievementsModal] = useState(false);
  const openAddAchievements = () => UpdateAchievementsModal(true);

  const closeAchievementsModal = (value) => {

    setLoading(true);
    const data = {
      id : loginState.user.data._id,
      data : value,
      type : 1
    }   
    
    axios.post(baseUrl + "/add", data, options)
      .then(res=>{
          const id = res.data.id;
          value.id = id;
          setAchievementData(prevState=>[ value, ...prevState ]);
          setLoading(false);
          UpdateAchievementsModal(false);          
      });       
    
  };
  
  const cancelAchievementModal = () => UpdateAchievementsModal(false);
  const handleAchievementDelete = (id) => {
    
    const data = {
      user_id : loginState.user.data._id,
      id : id,    
      type : 1
    }

    console.log(data);
    axios.post(baseUrl + "/delete", data, options)
      .then(res=>{
          if(res.data.msg==100){
            const object = projectData.filter((obj) => obj.id !== id);
            setAchievementData(object);            
          }          
      });
  };  

  //Skills
  const [skillsModal, UpdateSkillsModal] = useState(false);
  const openSkillsModal = () => UpdateSkillsModal(true);
  const cancelSkillsModal = () => UpdateSkillsModal(false);
  const closeSkillsModal = (value) =>{
    
    setLoading(true);
    const data = {
      id : loginState.user.data._id,
      skills : value,      
    }   
    
    axios.post(baseUrl + "/skills", data, options)
      .then(res=>{
          if(res.data.msg=100){
            setSkillsData(value);
            setLoading(false);
            UpdateSkillsModal(false);
          }          
      }); 
    
  } 


  //Education
  const [EducationModal, UpdateEducationModal] = useState(false);
  const openEducationModal = () => UpdateEducationModal(true);

  const closeEducationModal = (value) => {
    // setLoading(true);
    const data = {
      user_id: loginState.user.data._id,
      data: value,
      type: 3,
    };
    console.log(data);
    axios.post(baseUrl + "/edit", data, options).then((res) => {
      if ((res.data.msg = 100)) {
        setEducationData([value]);
        setLoading(false);
        UpdateEducationModal(false);
      }
    });
  };

  return (
    <div >
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
                    open = {skillsModal}
                    handleEdit = {openSkillsModal}
                    close = {closeSkillsModal}
                    data={skilsData} 
                    classes={classes}
                    cancel={cancelSkillsModal}
                     
                  />
                </GridItem>
                <GridItem style={{ background: "#fff", marginLeft: 20, marginTop : 20 }}>                  
                <ProfileEducation
                    data={educationData}
                    open={EducationModal}
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
                // style={{ margin: 10 }}
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
                    <WorkExModal
                      classes={classes}
                      open={WorkExModalOpen}
                      close={closeWorkExModal}
                      cancel = {cancelWorkModal}
                      loading = {loading}
                    />
                  </GridItem>
                  <GridItem
                    container
                    item
                    lg={6}
                    justify="flex-end"
                    style={{
                      padding: 10,
                      marginTop: 10,
                      maxHeight: 40,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddWorkEx}
                      style={{ height: 30 }}
                    >
                      Add New Work Experience                      
                    </Button>
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
                      <ProjectModal
                        classes={classes}
                        open={ProjectModalOpen}
                        close={closeProjectModal}
                        cancel ={cancelProjectModal}
                        loading = {loading}
                      />
                    </GridItem>
                    <GridItem
                      container
                      item
                      lg={6}
                      justify="flex-end"
                      alignItems="center"
                      style={{ padding: 5, marginBottom: 10 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={openAddProject}
                      >
                        Add New Project
                      </Button>
                    </GridItem>

                    <Project
                      classes={classes}
                      data={projectData}
                      handleDelete={(e, id) => handleProjectDelete(e, id)}
                    ></Project>
                  </Grid>
                  {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Project end @@@@@@@@@@@@@@@@@@@@@@@@@@@*/}

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
                      <AchievementsModal
                        classes={classes}
                        open={AchievementsModalOpen}
                        close={closeAchievementsModal}
                        cancel ={cancelAchievementModal}
                        loading = {loading}
                      />
                    </GridItem>
                    <GridItem
                      container
                      item
                      lg={6}
                      justify="flex-end"
                      alignItems="center"
                      style={{ padding: 5, marginBottom: 10 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={openAddAchievements}
                      >
                        Add New Achievement
                      </Button>
                    </GridItem>

                    <ProfileAchievements
                      classes={classes}
                      data={achievementData}
                      handleDelete={(e, id) => handleAchievementDelete(e, id)}
                    ></ProfileAchievements>
                  </Grid>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home_Dashboard;