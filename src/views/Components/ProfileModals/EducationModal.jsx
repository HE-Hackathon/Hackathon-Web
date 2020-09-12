import React, { Component, useState } from "react";
import { Grid, Paper, Button, Modal, TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { preProcessFile } from "typescript";
import moment from "moment";
import { DatePicker } from "@material-ui/pickers";
const EducationModal = (props) => {
  const loginState = useSelector((state) => state.login);
  const skills = loginState.user.skills[0].skills;

  const [state, handleState] = useState(props.data[0]);
  console.log(state);

  const [start_year, handleStart] = useState(moment(state.start_year));
  const [end_year, handleEnd] = useState(moment(state.end_year));
  const handleStartDate = (value) => handleStart(moment(value).format("YYYY"));
  const handleEndDate = (value) => handleEnd(moment(value).format("YYYY"));

  const handleSubmit = () => {
    state.start_year = start_year;
    state.end_year = end_year;
    props.close(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GridItem style={gridItemStyles} container item lg={6}>
              <h2>Update Education</h2>
            </GridItem>

            <GridItem style={gridItemStyles} container item lg={10}>
              <GridItem style={gridItemStyles} container item lg={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Institution Name"
                  fullWidth
                  autoComplete="off"
                  value={state.name}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
                <TextField
                  required
                  id="degree"
                  name="degree"
                  label="Degree"
                  placeholder="For eg. BE or BTech"
                  fullWidth
                  autoComplete="off"
                  value={state.degree}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
                <TextField
                  required
                  id="course"
                  name="course"
                  label="Course"
                  placeholder="For eg. Comupter Engineering"
                  fullWidth
                  autoComplete="off"
                  value={state.course}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
                <DatePicker
                  views={["year"]}
                  label="Start Year"
                  name="start_year"
                  value={start_year}
                  onChange={handleStartDate}
                  fullWidth
                />
              </GridItem>
              <GridItem style={gridItemStyles} container item lg={12}>
                <DatePicker
                  views={["year"]}
                  label="End Year"
                  name="end_year"
                  value={end_year}
                  onChange={handleEndDate}
                  fullWidth
                />
              </GridItem>

              <GridItem style={gridItemStyles} container item lg={12}>
                <TextField
                  required
                  id="score"
                  name="score"
                  label="Grade"
                  placeholder="CGPA/Percentage"
                  fullWidth
                  autoComplete="off"
                  value={state.score}
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
                  <Button
                    disabled={props.loading}
                    variant="contained"
                    onClick={props.cancel}
                  >
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
                    {props.loading
                      ? "Updating Education..."
                      : "Update Education"}
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

export default EducationModal;
