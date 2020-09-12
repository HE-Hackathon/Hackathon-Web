import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Paper, Button } from "@material-ui/core";
import moment from 'moment';

const RecruiterDashboardCard = (props) => {

  return (
    // <div>
    <Accordion style={{ width: "80%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={props.classes.heading}>
          <b>Company Name:</b> {props.data.company_name} <br />
          <b>Position:</b> {props.data.position} <br />
          <b>Deadline:</b> {moment(props.data.deadline).format("YYYY-MM-DD")} <br />
          <b>Created On:</b> {props.data.created_on} <br />
          <b>Number of Applicants: </b> {props.data.candidates_applied.length}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ height: 30, marginRight: 0 }}
              onClick={() => props.handleClick(props.data._id) }
            >
              View All Applicants
            </Button>
          <p>
            <h4>
              <b>Skills: </b>
            </h4>
            {props.data.skills.map((value) => (
              <b>{value} | </b>
            ))}
          </p>
          <br />
          <p>
            <h4>
              <b>Work Experience: {props.data.workex} years</b>{" "}
            </h4>
          </p>
          <br />
          <p>
            <h4>
              <b> Description:</b>
            </h4>

            <br />
            {props.data.description.split("\\n").map((item) => (
              <span>
                {item}
                <br />
              </span>
            ))}
            <br />
          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    // </div>
  );
};

export default RecruiterDashboardCard;
