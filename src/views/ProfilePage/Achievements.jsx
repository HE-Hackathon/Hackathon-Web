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

export default function Achievements(props) {
  const classes = useStyles();
  const { handleAchievementDetails,state } =props;
  const handleAchievement = (e) => handleAchievementDetails(e)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
        Achievement
      </Typography> 
      <small>Write NA if No Achievements</small>     
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: 10 }}>
          <TextField
            required
            id="name"
            name="name"
            label="Title"
            fullWidth
            autoComplete="off"
            value={state.achievements.name}
            onChange={handleAchievement}
          />
        </Grid>
        
        <Grid item xs={12} lg={12} style={{ marginTop: 10 }}>
          <TextField
            id="outlined-multiline-static"
            name = "description"
            label="Achievement Description"
            multiline
            rows={4}
            style={{ width: "100%" }}
            placeholder="Tell us something about your best achievement"
            variant="outlined"
            autoComplete="off"   
            value={state.achievements.description}
            onChange={handleAchievement}         
          />
        </Grid>               
      </Grid>
    </React.Fragment>
  );
}