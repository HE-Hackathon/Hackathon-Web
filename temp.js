import React, { useState } from "react";
import axios from "axios";

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
import WorkExModal from "../Components/ProfileModals/WorkExModal";
import ProjectModal from "../Components/ProfileModals/ProjectModal";
import AchievementsModal from "../Components/ProfileModals/AchievementsModal";
import AboutMe from "../Components/AboutMe/AboutMe";
import ProfileSkills from "../Components/Skills/ProfileSkills";
import WorkEx from "../Components/WorkEx/WorkEx";
import ProfileAchievements from "../Components/ProfileAchievements/ProfileAchievements";
import ProfileEducation from "../Components/Education/ProfileEducation";
import { useSelector } from "react-redux";
const useStyles = makeStyles(styles);

const Home_Dashboard = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const loginState = useSelector((state) => state.login);
  console.log(loginState);
  const achievements = loginState.user.data.achievements;
  const data = loginState.user.data.projects;

  const [projectData, setProjectData] = useState(data);

  const skills = loginState.user.data.skills;
  const education = loginState.user.data.education;
  const [skilsData, setSkillsData] = useState(skills);
  const [educationData, setEducationData] = useState(education);
  //Funtions in this page
  const handleAddProject = () => {
    const object = {
      id: 4,
      name: "Gaming PUBG",
      technologies_used: "C++,JS",
      description:
        "While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes..",
      link: "",
    };
    setProjectData((oldProjectData) => [object, ...oldProjectData]);
  };

  const handleProjectDelete = (id) => {
    const object = projectData.filter((obj) => obj.id !== id);
    setProjectData(object);
  };

  const profileInfo = {
    name: loginState.user.data.name,
    linkedin: loginState.user.data.linkedin
      ? loginState.user.data.linkedin
      : "",
    github: loginState.user.data.github ? loginState.user.data.skills : "",
    bio: loginState.user.data.bio,
  };
  const profileSkills = skills;
  const profileWorkEx = loginState.user.data.workex;
  // const [WorkEx, handleAddWorkEx] = useState(profileWorkEx);

  const [WorkExModalOpen, UpdateWorkExModal] = useState(false);
  const handleAddWorkEx = () => {
    console.log("clicked");
    // <WorkEx />;UpdateWorkExModal
    UpdateWorkExModal(true);
  };
  const closeWorkExModal = () => {
    UpdateWorkExModal(false);
  };

  const [AchievementsModalOpen, UpdateAchievementsModal] = useState(false);
  const openAddAchievements = () => {
    console.log("clicked");
    // <WorkEx />;UpdateWorkExModal
    UpdateAchievementsModal(true);
  };
  const closeAchievementsModal = () => {
    UpdateAchievementsModal(false);
  };

  const [ProjectModalOpen, UpdateProjectModal] = useState(false);
  const openAddProject = () => {
    console.log("clicked");
    // <WorkEx />;UpdateWorkExModal
    UpdateProjectModal(true);
  };
  const closeProjectModal = () => {
    UpdateProjectModal(false);
  };

  console.log(profileWorkEx);
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
          <Grid container xs={12} lg={12} sm={12} direction="row">
            <GridItem container item lg={4} sm={12} xs={12}>
              <Grid
                spacing={3}
                direction="column"
                container
                xs={12}
                lg={12}
                sm={12}
              >
                <GridItem style={{ background: "#fff" }}>
                  {" "}
                  <AboutMe data={profileInfo} />
                </GridItem>
                <GridItem style={{ background: "#fff", marginTop: 10 }}>
                  {" "}
                  <ProfileSkills data={profileSkills} />
                </GridItem>
                <GridItem style={{ background: "#fff", marginTop: 10 }}>
                  {" "}
                  <ProfileEducation data={education} />
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

                      // border: "2px solid red",
                      // border: "2px solid red",
                    }}
                  >
                    <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                      Work Experience
                    </p>
                    <WorkExModal
                      classes={classes}
                      data={profileWorkEx}
                      open={WorkExModalOpen}
                      close={closeWorkExModal}
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
                      // border: "2px solid red",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddWorkEx}
                      style={{ height: 30 }}
                    >
                      Add New Work Experience
                      {/* <WorkExModal /> */}
                    </Button>
                  </GridItem>
                  <WorkEx data={profileWorkEx} classes={classes} />
                  {/* <WorkExModal data={profileWorkEx} classes={classes} /> */}
                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Projects ******** */}

                  <Grid
                    container
                    direction="row"
                    xs={12}
                    lg={12}
                    sm={12}
                    style={{ marginTop: 20 }}
                  >
                    <GridItem
                      container
                      item
                      lg={6}
                      style={{ padding: 10, paddingLeft: 25 }}
                      alignItems="center"
                    >
                      <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                        PROJECTS
                      </p>
                      <ProjectModal
                        classes={classes}
                        open={ProjectModalOpen}
                        close={closeProjectModal}
                      />
                    </GridItem>
                    <GridItem
                      container
                      item
                      lg={6}
                      justify="flex-end"
                      alignItems="center"
                      style={{ padding: 10, marginBottom: 10 }}
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
                  {/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Project end @@@@@@@@@@@@@@@@@@@@@@@@@@@/}

                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Achievements@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

                  <Grid
                    container
                    direction="row"
                    xs={12}
                    lg={12}
                    sm={12}
                    style={{ marginTop: 20 }}
                  >
                    <GridItem
                      container
                      item
                      lg={6}
                      style={{ padding: 10, paddingLeft: 25 }}
                      alignItems="center"
                    >
                      <p style={{ fontSize: 25, fontWeight: "bolder" }}>
                        Achievements
                      </p>
                      <AchievementsModal
                        classes={classes}
                        open={AchievementsModalOpen}
                        close={closeAchievementsModal}
                      />
                    </GridItem>
                    <GridItem
                      container
                      item
                      lg={6}
                      justify="flex-end"
                      alignItems="center"
                      style={{ padding: 10, marginBottom: 10 }}
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
                      data={achievements}
                      handleDelete={(e, id) => handleProjectDelete(e, id)}
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