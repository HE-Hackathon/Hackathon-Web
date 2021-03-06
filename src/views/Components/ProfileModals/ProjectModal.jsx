import React, { Component, useState } from "react";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { preProcessFile } from "typescript";

const ProjectModal = (props) => {
  
  const loginState = useSelector(state=>state.login)
  const skills = loginState.user.skills[0].skills;

  const [state,handleState] = useState({
    name : "",
    description : "",
    link : "",    
  })

  const handleChange = ( e) => {
    const {name,value} = e.target;
    handleState(prevState=>({
      ...prevState,
      [name] : value
    }))
  } 

  const [techStack, handleTechStack] = useState([]);

  const handleTechStackChange = (val) => {
    handleTechStack(val);
  }
  const handleSubmit = () =>{
    state.techstack = techStack;
    props.close(state);
  }

  const gridItemStyles = {
    margin: 10,
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={props.classes.modal}
        open={props.open}
        onClose={props.close}
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
        <Fade in={props.open}>
          <Grid
            container
            direction="row"
            lg={5}
            style={{
              background: "white",
              borderRadius: "3px",
              height: "auto",
              padding: 10,
              display : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <GridItem style={gridItemStyles} container item lg={6}>
              <h2>Add Project</h2>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={10}>              
              <GridItem style={gridItemStyles} container item lg={12} >
               <TextField
                  id="outlined-multiline-static"
                  name = "name"
                  label="Project Title"                             
                  placeholder="Project Title"
                  variant="outlined"
                  autoComplete="off"
                  value = { state.name }
                  style = {{ width: "100%" }}
                  onChange = { handleChange }
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
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
                  value={state.description}   
                  onChange= {handleChange}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
              <Autocomplete
                  multiple
                  id="size-small-outlined-multi"
                  size="small"            
                  fullWidth
                  onChange={(event, value) => handleTechStackChange(value)}
                  value={techStack}
                  options={skills}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Technologies Used"
                      placeholder="Select"
                    />
                  )}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
                 <TextField            
                    id="link"
                    name="link"
                    label="Project Link"
                    fullWidth
                    autoComplete="off"
                    value={state.link}
                    onChange= {handleChange}
                  />
              </GridItem>
            </GridItem>           

            <GridItem
              justifyContent="center"
              style={gridItemStyles}
              container
              item
              lg={12}
            >
              <Grid
                container
                direction="row"
                style={{
                  height: "auto",
                  padding: 10,
                  display: "flex",
                }}
              >
                <GridItem
                  style={{ justifyContent: "flex-end" }}
                  container
                  item
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Button disabled={props.loading} variant="contained" onClick={props.cancel}>
                    Cancel
                  </Button>
                </GridItem>

                <GridItem container item lg={6} sm={12} xs={12}>
                  <Button
                    disabled={props.loading}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    {props.loading ? "Adding Project..." : "Add Project" }
                  </Button>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectModal;