import React, { Component, useState } from "react";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { DatePicker } from "@material-ui/pickers";
import moment from 'moment';
const WorkExModal = (props) => {
  
  const gridItemStyles = {
    margin: 10,
  };

  const [state, handleState] = useState({
    company_name: "",
    position: "",
    description: "",
  })

  const [start_year,handleStart] = useState(moment(new Date()).format());
  const [end_year,handleEnd] = useState(moment(new Date()).format());


  const handleChange = ( e ) => {
    const {name,value} = e.target;
    handleState(prevState=>({
      ...prevState,
      [name] : value,
    }))
  }

  const handleStartDate = (value) => handleStart(value);
  const handleEndDate = (value) => handleEnd(value);

  const handleSubmit = () => {
    state.start_year = start_year;
    state.end_year = end_year;
    props.close(state);
  }
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
            xs={5}
            sm={5}
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
            <GridItem style={{ display : 'flex', justifyContent: 'center', alignItems: 'center'}}  container item lg={10}>
              <h2>Add New Work Experience</h2>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={10}>              
              <GridItem style={gridItemStyles} container item lg={12}>
              <TextField
                  required
                  id="name"
                  name="company_name"
                  label="Company Name"
                  variant="outlined"
                  value={state.company_name}
                  onChange= {handleChange}            
                  fullWidth
                  autoComplete="off"
                />
              </GridItem>
            
            <GridItem style={gridItemStyles} container item lg={12}>
            <TextField
              required
              id="position"
              name="position"
              variant="outlined"
              value={state.position}
              onChange= {handleChange}            
              label="Position"
              fullWidth
              autoComplete="off"
            />
            </GridItem>
            <GridItem style={gridItemStyles} container item lg={12}>
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
                onChange= {handleChange}        
                value={state.description}    
              />
            </GridItem>
            <GridItem style={gridItemStyles} container item lg={12}>
            <DatePicker
              views={["year"]}
              label="Start Year"
              variant="outlined"
              value={start_year}
              onChange={handleStartDate}
              fullWidth
            />
            </GridItem>
            <GridItem style={gridItemStyles} container item lg={12}>
            <DatePicker
                views={["year"]}
                label="End Year"
                variant="outlined"
                value={end_year}
                onChange={handleEndDate}
                fullWidth
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
                    { props.loading ? "Adding Work Experience..." :  "Add Work Experience" }
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

export default WorkExModal;