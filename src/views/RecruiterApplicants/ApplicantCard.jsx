import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import { Doughnut } from 'react-chartjs-2';

const ApplicantCard = (props) => {
  
  console.log(props);
  const path = props.path;
  
  return (
    <Grid
      style={{ padding: 10 }}
      container
      xs={12}
      lg={12}
      sm={12}
      direction="row"
    >
      {props.data.map((value) => (
        <GridItem
          container
          item
          lg={2}
          sm={2}
          xs={2}
          style={{ textAlign: "center", justifyContent: "center", margin : 20, shadowColor: '1px 1px black', }}
        >
          <Card className={props.classes.root}>
            <CardHeader title={value.name} />
              <small>{value.email}</small>
            <CardContent> 
            <Grid style={{ marginBottom :20 }}>

              {path === "/viewdevelopers" ? 
                <div>
                  <p>
                    <b>Skillset : {value.skills.join(" | ")}</b>
                  </p>
                </div>
                  :   
              <Doughnut data = {
                  {
                    labels: [
                      'Skills Matched (%)',
                      'Skills Unmatched (%)',          
                    ],
                    datasets: [{
                      data: [ parseInt(value.matched) , parseInt(100- value.matched) ],
                      backgroundColor: [
                      '#1F8B1F',
                      '#eee',      
                      ],
                      hoverBackgroundColor: [
                      '#1F8B1F',
                      '#eee',      
                      ]
                    }]
                  }
              } 
             height = {200} width = {200} />
            }
             </Grid>
              <Button                
                variant="contained"
                color="primary"
                size="medium"                              
                alignItems="center"
                onClick = { ()=>props.handleClick(value._id) }
              >
                View Profile
              </Button>
            </CardContent>          
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};
export default ApplicantCard;
