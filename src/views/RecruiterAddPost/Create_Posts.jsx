import React, { Fragment, useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import Posts from "./Posts";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/homeDashboard.js";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import moment from 'moment';
import { useSelector } from "react-redux";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles(styles);

const Create_Posts = (props) => {
  const { ...rest } = props;

  const loginState = useSelector(state=>state.login);
  const skillsTotal = loginState.user.skills[0].skills;
  const classes = useStyles();
  const  { open, handleOpen, handleClose } = props;
  
  const [state, handleState] = useState({    
    description: "",
    position: "",
    workex: "",    
  });

  const [skills, handleSkills] = useState([]);
  const [deadline,handleDeadline] = useState(moment(new Date).format())
  
  const handleSkillsChange = (value) => handleSkills(value);
  const handleDateChange = (value) => handleDeadline(value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleState((prevState) => ({
      ...prevState,      
      [name] : value
    }));    
  }
  
  const handleSubmit = () => {
    state.skills = skills;
    state.deadline = deadline;    
    props.handleAddPost(state);
  };
  
  return (
    <div>           
          <Grid container
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Create Post
            </Button>
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                disableBackdropClick={true}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
                style={{          
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",          
                  marginTop: "auto",
                }}
              >
              <Fade in={open}>
                <Grid
                  container
                  lg={6}
                  xs ={6}
                  sm={6}
                  style={{
                    background: "white",
                    borderRadius: "3px",
                    height: "auto",
                  }}
                >
                  <Grid>
                    <p
                      style={{
                        fontSize: "large",
                        fontWeight: "bold",
                        marginLeft: "22rem",
                        marginTop: "2rem",
                      }}
                    >
                      Post Details
                    </p>
                  </Grid>

                  <Grid
                    xs={12}
                    lg={12}
                    style={{                      
                      marginLeft: "10rem",
                      marginRight: "10rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Autocomplete
                      multiple
                      id="size-small-outlined-multi"
                      size="small"
                      fullWidth
                      value={skills}
                      onChange={(e, value) => handleSkillsChange(value)}
                      options={skillsTotal}
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

                  <Grid
                    item
                    xs={12}
                    lg={12}
                    style={{
                      marginTop: 10,
                      background: "white",
                      marginLeft: "10rem",
                      marginRight: "10rem",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      style={{ width: "100%" }}
                      placeholder="Tell us something about yourself"
                      variant="outlined"
                      autoComplete="off"
                      value={state.description}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    style={{
                      marginTop: 10,
                      background: "white",
                      marginLeft: "10rem",
                      marginRight: "10rem",
                    }}
                  >
                    <TextField
                      required
                      id="position"
                      name="position"
                      label="Position"
                      placeholder="For eg. Project Developer , etc"
                      variant="outlined"                    
                      autoComplete="off"
                      value={state.position}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid
                    xs={12}
                    lg={12}
                    style={{
                      marginTop: 10,
                      marginLeft: "10rem",
                      marginRight: "10rem",
                      width: "40rem",
                    }}
                  >
                    <TextField
                      required
                      id="workexp"
                      name="workex"
                      label="Work Experience"
                      placeholder="In years"
                      variant="outlined"
                      fullWidth
                      autoComplete="off"
                      value={state.workexp}
                      type="number"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    lg={12}
                    style={{
                      marginTop: 10,
                      marginLeft: "10rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <DatePicker
                      openTo="year"
                      format="dd/MM/yyyy"
                      label="Application Deadline"
                      variant="inline"
                      inputVariant="outlined"
                      views={["year", "month", "date"]}
                      value={deadline}
                      onChange={handleDateChange}
                    />
                  </Grid>
                  <Grid style={{ marginLeft: "23rem", marginBottom: "6rem" }}>
                  <Button
                      variant="contained"
                      color="default"
                      onClick={handleClose}
                      style={{ marginRight : 10 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>                   
                  </Grid>
                </Grid>
              </Fade>
            </Modal>      
          </Grid>          
        </div>    
  );
};

export default Create_Posts;
