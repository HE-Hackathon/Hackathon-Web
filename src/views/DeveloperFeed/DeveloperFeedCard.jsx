
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Paper, Button } from "@material-ui/core";
import axios from "axios";
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';


const DeveloperFeedCard = (props) => {
  const [data, setFeedData] = useState([]);
  const loginState = useSelector((state) => state.login);
  const handleClick = () => {
    // console.log(props);
    // console.log(props.data._id);
    console.log(loginState);
    const sendData = {
      email: loginState.user.data.email,
      name: loginState.user.data.name,
      user_id: loginState.user.data._id,
      id: props.data._id,
    };
    console.log(sendData);
    const baseUrl = "https://hackerearthhackathon.herokuapp.com";
    const feedUrl = "/easy_apply";
    // const postId = props.match.params.id;

    // console.log(postId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(baseUrl + feedUrl, sendData, options).then((res) => {
      if (res.data.msg == 100) {
        setFeedData(res.data);
      }
    });
    // console.log(res);

    // const data = dataApp.data.candidates;
  };

  let isApplied = false;

  props.data.candidates_applied.map(
    (value) =>
      (isApplied = value.user_id === loginState.user.data._id ? true : false)
  );
  return (
    // <div>
    <Accordion style={{ width: "80%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{
            display:'flex',
            justifyContent: 'center', 
            alignItems:'center' , 
            padding: 20, 
            fontSize: 40 }} 
          >
          <BusinessTwoToneIcon/>
        </Typography>
        <Typography className={props.classes.heading}>
          <b>Company Name:</b> {props.data.company_name} <br />
          <b>Position:</b> {props.data.position} <br />
          <b>Deadline:</b> {props.data.deadline}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>
            <h4>
              {" "}
              <b>Skills: </b>
            </h4>
            {props.data.skills.map((value) => (
              <b>{value} | </b>
            ))}
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
            
            
            {isApplied == false ? (
              <Button
                variant="contained"
                color="primary"
                style={{ height: 30, marginRight: 0 }}
                onClick={handleClick}
              >
                Easy Apply
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                style={{ height: 30, marginRight: 0 }}
                disabled="true"
              >
                Applied
              </Button>
            )}



          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    // </div>
  );
};

export default DeveloperFeedCard;
