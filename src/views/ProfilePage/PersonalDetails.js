import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";
import { useSelector } from "react-redux";


 const PersonalDetails = (props) => {
  
  const [startYear, handleStartDateChange] = useState(new Date());
  const [endYear, handleEndDateChange] = useState(new Date());

  const [stated,handleState] = useState({
    bio : "",
    github : "",
    linkedin : "",
    education : {
      name : "",
      degree : "",
      course : "",
    },    
  });

  const { state } = props;

  const handleChange = (e) => props.handlePersonDetails(e)
  const handleEducationChange = (e) => props.handleEducation(e)
  const handleStartDate = (val) => props.handleStartDateChange(val)
  const handleEndDate = (val) => props.handleEndDateChange(val)



  const data = useSelector(state=>state.login);
  const name = data.user.data.name;  
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ marginTop : 0 }}>
        Welcome {name}!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12} style={{ marginTop: 10 }}>
          <TextField
            id="outlined-multiline-static"
            name = "bio"
            label="About Yourself"
            multiline
            rows={4}            
            placeholder="Tell us something about yourself"
            variant="outlined"
            autoComplete="off"
            value = { state.bio }
            style = {{ width: "100%" }}
            onChange = { handleChange }
          />
          <small style = {{ color : props.err ? "red"  : "" }}> {props.err ? "This is a required field *" : " " }</small>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="github"
            name="github"
            label="GitHub Profile Link"
            fullWidth
            autoComplete="given-name"
            value = { state.github }
            onChange = { handleChange }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="LinkedIn Profile Link"
            fullWidth
            autoComplete="family-name"
            value = { state.linkedin }
            onChange = { handleChange }
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Institution Name"
            fullWidth
            autoComplete="off"
            value= {state.education.name}
            style = {{  width: "100%" }}

            onChange = { handleEducationChange }            
          />
          <small style = {{ color : props.err ? "red"  : "" }}> {props.err ? "This is a required field *" : " " }</small>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="degree"
            name="degree"
            label="Degree"
            placeholder="For eg. BE or BTech"
            fullWidth
            autoComplete="off"
            value= {state.education.degree}
            onChange = { handleEducationChange }        
          />
        <small style = {{ color : props.err ? "red"  : "" }}> {props.err ? "This is a required field *" : " " }</small>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="course"
            name="course"
            label="Course"
            placeholder="For eg. Comupter Engineering"
            fullWidth
            autoComplete="off"
            value= {state.education.course}
            onChange = { handleEducationChange }        
          /> 
        <small style = {{ color : props.err ? "red"  : "" }}> {props.err ? "This is a required field *" : " " }</small>
        </Grid>
        
        <Grid item xs={12} sm={6} style={{ marginTop : 0}}>
          <DatePicker
            views={["year"]}
            label="Start Year"
            name = "start_year"
            value= {state.education.start_year}
            onChange={handleStartDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop : 0 }}>
          <DatePicker
            views={["year"]}
            label="End Year"
            name="end_year"
            value= {state.education.end_year}
            onChange={handleEndDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="score"
            name="score"
            label="Grade"
            placeholder="CGPA/Percentage"
            fullWidth
            autoComplete="off"
            value= {state.education.score}
            onChange = { handleEducationChange }        
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default PersonalDetails;