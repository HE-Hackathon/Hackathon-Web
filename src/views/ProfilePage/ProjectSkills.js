import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ProjectSkills(props) {

  const classes = useStyles();
  const loginState = useSelector(state=>state.login)
  const skills = loginState.user.skills[0].skills;    
  const { state, handleSkills, handleProjectDetails, handleTechStack } = props;
  const handleChange = (value) => handleSkills(value)
  const handleProject = (e) => handleProjectDetails(e)
  const handleTechStackChange = (value) => handleTechStack(value)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Autocomplete
            required
            multiple
            id="size-small-outlined-multi"
            size="small"            
            fullWidth
            value={state.skills}
            onChange={(event, value) => handleChange(value)}
            options={skills}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select your skills ( Atleast One ) *"
                placeholder="Skill"
              />
            )}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
        PROJECT
      </Typography>
      <small>Note : You can add your remaining projects from the dashboard</small>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="name"
            name="name"
            label="Project Title"
            fullWidth
            autoComplete="off"
            value={state.projects.name}   
            onChange= {handleProject}
          />
        </Grid>
        <Grid item xs={12} lg={12} style={{ marginTop: 10 }}>
          <TextField
            id="outlined-multiline-static"
            name = "description"
            label="Project Description"
            multiline
            rows={4}
            style={{ width: "100%" }}
            placeholder="Tell us something about your project"
            variant="outlined"
            autoComplete="off"         
            value={state.projects.description}   
            onChange= {handleProject}
          />
        </Grid>       
        <Grid item xs={12} style={{ marginTop : 10 }}>
          <Autocomplete
            multiple
            id="size-small-outlined-multi"
            size="small"            
            fullWidth
            onChange={(event, value) => handleTechStackChange(value)}
            value={state.projects.techstack}
            options={skills}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Technologies Used ( Atleast One ) * "
                placeholder="Select"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField            
            id="link"
            name="link"
            label="Project Link"
            fullWidth
            autoComplete="off"
            value={state.projects.link}
            onChange= {handleProject}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
