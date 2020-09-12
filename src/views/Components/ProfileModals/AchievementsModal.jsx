import React, { Component, useState } from "react";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const AchievementsModal = (props) => {
  
  const gridItemStyles = {
    margin: 10,
  };

  const [state, handleState] = useState({
    name: "",
    description: "",
  })

  const handleChange = (e)=> {
    const {name,value} = e.target;
    handleState(prevState=>({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmit = () => {
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
              <h2>Add New Achievement</h2>
            </GridItem>
            <GridItem style={gridItemStyles} container item lg={10}>              
              <GridItem style={gridItemStyles} container item lg={12}>
              <TextField
                  required
                  id="name"
                  name="name"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={state.name}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
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
                  value={state.description}
                  onChange={handleChange}         
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
                    {props.loading ? "Adding Achievement...": "Add Achievement"}
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

export default AchievementsModal;