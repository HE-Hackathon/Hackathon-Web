import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaymentForm() {

  const classes = useStyles();
  const top100Films = [
    "C" ,
    "C++",
    "Python",
    "Android Developement",
    "React",
  ];
  
  const [state,handleState] = useState({
    skills : [],  
  });

  const handleChange = (value) => {
    handleState( prevState=>({
      ...prevState,
      skills : value
    }));
  };
  
  console.log(state);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Autocomplete
            multiple
            id="size-small-outlined-multi"
            size="small"            
            fullWidth
            onChange={(event, value) => handleChange(value)}
            options={top100Films}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select your skills"
                placeholder="Skill"
              />
            )}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
        PROJECTS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <TextField
            required
            id="title"
            name="title"
            label="Project Title"
            fullWidth
            autoComplete="off"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
