import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const { handleWorkDetails, state } = props;
  const handleWork = (e) => handleWorkDetails(e)
  const handleStartDate = (val) => props.handleWorkStartDateChange(val)
  const handleEndDate = (val) => props.handleWorkEndDateChange(val)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
        Work Experience / Internship      
      </Typography>     
      <small>Write NA if no Work Experience / Internship</small>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={{ marginTop: 10 }}>
          <TextField
            required
            id="name"
            name="company_name"
            label="Company Name"
            value={state.workex.company_name}
            onChange= {handleWork}            
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: 10 }}>
          <TextField
            required
            id="position"
            name="position"
            value={state.workex.position}
            onChange= {handleWork}            
            label="Position"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} lg={12} style={{ marginTop: 10 }}>
          <TextField
            id="outlined-multiline-static"
            name = "description"
            label="Work Experience Description"
            multiline
            rows={4}
            style={{ width: "100%" }}
            placeholder="Tell us something about your work experience"
            variant="outlined"
            autoComplete="off"            
            onChange= {handleWork}        
            value={state.workex.description}    
          />
        </Grid>       
        <Grid item xs={12} sm={6} style={{ marginTop : 15 }}>
          <DatePicker
            views={["year"]}
            label="Start Year"
            value={state.workex.start_year}
            onChange={handleStartDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop : 15 }}>
          <DatePicker
            views={["year"]}
            label="End Year"
            value={state.workex.end_year}
            onChange={handleEndDate}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}