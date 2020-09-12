import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/createProfile.js";
import { Grid } from "@material-ui/core";
import Checkout from "./Checkout";
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { userDataUpdate } from "redux/actions";

const baseUrl = "https://hackerearthhackathon.herokuapp.com";
const createProfile = "/sub_profile"
const useStyles = makeStyles(styles);

const Login_CreateProfile = (props) => {
  
  const { ...rest } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);  
  
  const [state, handleState] = useState({
    bio : "",
    github : "",
    linkedin : "",
    education : {
      name: "",
      degree : "",
      course : "",
      start_year : moment(new Date()).format(),
      end_year :  moment(new Date()).format(),
      score : ""
    },
    skills : [],
    projects : {
      name: "",
      description : "",
      link : "",
      techstack : []
    },
    workex : {
      position : "",
      company_name : "",
      start_year :  moment(new Date()).format(),
      end_year :  moment(new Date()).format(),
      description : ""
    },
    achievements : {
      name : "",
      description : ""
    }
  });
  const [err,handleError] = useState(false);
  const dispatch = useDispatch();
  const handleActiveState = (step) =>{
    let isEverythingOk = true;

    // if(activeStep === 0){
    //   if(
    //       state.bio.length===0 || 
    //       state.education.name.length ===0 || 
    //       state.education.degree.length === 0 ||
    //       state.education.course.length === 0 
    //     ){
    //     handleError(true);
    //     isEverythingOk = false;
    //   }
    // }else if(activeStep===1){

    // }else if(activeStep===2){

    // }else if(activeStep === 3){

    // }

    if(isEverythingOk){
      setActiveStep( step )
    }
    
  }

  const handlePersonDetails = (e) => {    
    handleError(false);
    const {name,value} = e.target    
    handleState(prevState=>({
      ...prevState,
      [name] : value
    }))
  }

  const handleEducation = (e) => {
    const {name,value} = e.target    
    handleState(prevState=>({
      ...prevState,
      education : {
        ...prevState.education,
        [name] : value
      }      
    }))
  }

// moment(startYear).format('YYYY')
  const handleStartDateChange = (val) => {
    handleState(prevState=>({
      ...prevState,
      education : {
        ...prevState.education,
        start_year : moment(val).format()
      }          
    }))
  }

// moment(startYear).format('YYYY')
  const handleEndDateChange = (val) => {
    handleState(prevState=>({
      ...prevState,
      education : {
        ...prevState.education,
        end_year : moment(val).format()
      }          
    }))
  }

  const handleSkills = (value) => {
    handleState( prevState=>({
      ...prevState,
      skills : value
    }));
  }

  const handleProjectDetails = (e) => {    
    const {name,value} = e.target    
    handleState(prevState=>({
      ...prevState,
      projects :{
        ...prevState.projects,
        [name] : value
      }      
    }))
  }

  const handleTechStack = (value) => {
    handleState( prevState=>({
      ...prevState,
      projects :{
        ...prevState.projects,
        techstack : value
      }      
    }));
  }

  const handleWorkDetails = (e) => {    
    const {name,value} = e.target    
    handleState(prevState=>({
      ...prevState,
      workex :{
        ...prevState.workex,
        [name] : value
      }      
    }))
  }

  const handleWorkStartDateChange = (val) => {
    handleState(prevState=>({
      ...prevState,
      workex : {
        ...prevState.workex,
        start_year : moment(val).format()
      }          
    }))
  }

// moment(startYear).format('YYYY')
  const handleWorkEndDateChange = (val) => {
    handleState(prevState=>({
      ...prevState,
      workex : {
        ...prevState.workex,
        end_year : moment(val).format()
      }          
    }))
    
  }

  const handleAchievementDetails = (e) => {    
    const {name,value} = e.target    
    handleState(prevState=>({
      ...prevState,
      achievements :{
        ...prevState.achievements,
        [name] : value
      }      
    }))
  }
  const user_data = useSelector(state=>state.login);
  const skills = user_data.user.skills[0].skills;
  const handleSubmit = () => {
    
    const data = state;
    const options = {
      headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin" : "*"
      }
    }

    data.education = [data.education]
    data.workex = [data.workex]
    data.achievements = [data.achievements]
    data.projects = [data.projects]
    
    const id = user_data.user.data._id;
    const email = user_data.user.data.email;
    const pass = user_data.user.data.password;
    const isCreatedProfile = user_data.user.data.isCreatedProfile;
    const isVerified = user_data.user.data.isVerified;
    const name = user_data.user.data.name;
    
    data._id = id;
    data.email = email;
    data.password = pass;
    data.isCreatedProfile = isCreatedProfile;
    data.isVerified = isVerified;
    data.name = name;
    
    console.log(data)
    
    axios.post(baseUrl+createProfile, data, options )
      .then(res=>{
        console.log(res);
        const data = res.data;
        const final_data = {
          data : data,
          isRecruiter : localStorage.getItem('isRecruiter') ==="true" ,
          skills : skills
        }
        dispatch(userDataUpdate(final_data))
        props.history.push('/feed');
    })

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
      <div className={classes.pageHeader} >
        <div
          style={{ flexGrow: "1", width: "100%",height: '100vh'}}
          className={classes.container}
        >
          <Grid container xs={12} lg={12} sm={12} style={{background: '#eee'}}>            
            <Checkout 
              activeStep = {activeStep} 
              data = {state}
              handleActiveState={handleActiveState}
              handlePersonDetails={handlePersonDetails}
              handleEducation={handleEducation}
              handleStartDateChange={handleStartDateChange}
              handleEndDateChange={handleEndDateChange}
              handleSkills={handleSkills}
              handleProjectDetails={handleProjectDetails}
              handleTechStack={handleTechStack}
              handleWorkDetails={handleWorkDetails}
              handleWorkStartDateChange={handleWorkStartDateChange}
              handleWorkEndDateChange={handleWorkEndDateChange}
              handleAchievementDetails={handleAchievementDetails}
              handleSubmit={handleSubmit}
              err={err}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Login_CreateProfile;
