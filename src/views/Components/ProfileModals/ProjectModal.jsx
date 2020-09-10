import React, { Component } from "react";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const ProjectModal = (props) => {
  const inputStyles = {
    // borderRadius: "35px",
    // margin: 10,
    // padding: 10,
    width: "90%",
    height: 35,
  };

  const gridItemStyles = {
    margin: 5,
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
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20rem",
          marginTop: "auto",
        }}
      >
        <Fade in={props.open}>
          <Grid
            container
            direction="row"
            style={{
              background: "white",
              borderRadius: "3px",
              height: "auto",
              padding: 10,
            }}
          >
            <GridItem style={gridItemStyles} container item lg={12}>
              <h1>Add Project</h1>
            </GridItem>
            <GridItem style={gridItemStyles} container item lg={12}>
              <GridItem container item lg={4}>
                <h4>Project Title: </h4>
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={7}>
                <input style={inputStyles} type="text" name="Title" />
              </GridItem>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={12}>
              <GridItem container item lg={4}>
                <h4>Technologies Used </h4>
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={7}>
                <input
                  style={inputStyles}
                  type="text"
                  name="TechnologiesUsed"
                />
              </GridItem>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={12}>
              <GridItem container item lg={4}>
                <h4>Project Link </h4>
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={7}>
                <input style={inputStyles} type="text" name="ProjectLink" />
              </GridItem>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={12}>
              <GridItem container item lg={4}>
                <h4>Description: </h4>
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={7}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  style={{ width: "100%" }}
                  placeholder="Tell us something about work"
                  variant="outlined"
                  autoComplete="off"
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
                  <Button variant="contained" onClick={props.close}>
                    Cancel
                  </Button>
                </GridItem>

                <GridItem container item lg={6} sm={12} xs={12}>
                  <Button
                    // style={{ margin: "auto" }}
                    variant="contained"
                    color="primary"
                    onClick={props.close}
                  >
                    Add Project
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
