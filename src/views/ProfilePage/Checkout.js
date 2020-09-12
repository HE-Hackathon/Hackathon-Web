import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import PersonalDetails from "./PersonalDetails";
import ProjectSkills from "./ProjectSkills";
import Review from "./Review";
import Achievements from "./Achievements";
import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "Personal Details",
  "Projects and Skills",
  "Work Experience",
  "Achievements",
];


export default function Checkout(props) {
  
  const classes = useStyles();
  const currentStep = props.activeStep;

  const handleNext = () =>{
    if(currentStep===steps.length-1){
      props.handleSubmit();
    }else{
      props.handleActiveState(currentStep+1)  
    }
    
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:      
        return <PersonalDetails 
          handlePersonDetails = {props.handlePersonDetails} 
          state={props.data} 
          handleEducation={props.handleEducation} 
          handleEndDateChange={props.handleEndDateChange}
          handleStartDateChange={props.handleStartDateChange}
          err={props.err}
          
        />
      case 1:
        return <ProjectSkills 
            handleSkills={props.handleSkills} 
            state={props.data}
            handleProjectDetails={props.handleProjectDetails}
            handleTechStack={props.handleTechStack}
          />
      case 2:
         return <Review 
            handleWorkDetails ={props.handleWorkDetails}
            state={props.data}
            handleWorkStartDateChange={props.handleWorkStartDateChange}
            handleWorkEndDateChange={props.handleWorkEndDateChange}
         />
      case 3:
        return <Achievements 
            handleAchievementDetails={props.handleAchievementDetails} 
            state={props.data}
          />
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <React.Fragment>      
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" >
            Create Profile
          </Typography>
          <Stepper activeStep={currentStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(currentStep)}            
            <div className={classes.buttons}>
              {currentStep !== 0 && (
                <Button 
                    onClick={() => props.handleActiveState(currentStep-1)} 
                    className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={ handleNext }
                className={classes.button}
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </React.Fragment>
        </Paper>    
      </main>
    </React.Fragment>
  );
}