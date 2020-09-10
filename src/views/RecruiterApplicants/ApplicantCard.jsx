import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
const ApplicantCard = (props) => {
  console.log("Here" + props.data);
  //   const ans = {props.data.map((value, index) => (
  //     <GridItem container item lg={4} sm={12} xs={12}>
  //     <Card key={index} className={props.classes.root} style={{ padding: 10 }}>
  //       <CardHeader title={value.name} />

  //       <CardContent>
  //         <Typography variant="body2" color="black" component="p">
  //           <br />
  //           <p>{value.percentMatch}</p>
  //         </Typography>
  //       </CardContent>
  //     </Card>
  // </GridItem>

  //     ))}
  const ans = <div></div>;
  console.log("Ans=  " + ans);
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
          lg={3}
          sm={12}
          xs={12}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <Card
            className={props.classes.root}
            // style={{ border: "2px solid blue" }}
          >
            <CardHeader title={value.name} />

            <CardContent>
              <CardMedia
                className={props.classes.media}
                component="img"
                image="@/src/assets/img/bg.jpg"
                title="Skills Match"
                height="150"
              />
              <Typography
                variant="body2"
                color="black"
                component="p"
                alignItems="center"
              >
                <br />
                {value.percentMatch > "50%" ? (
                  <p style={{ color: "green" }}>
                    Percent Match: {value.percentMatch}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>
                    Percent Match: {value.percentMatch}
                  </p>
                )}
              </Typography>
              <Button
                href={value.viewProfile}
                variant="contained"
                color="primary"
                size="medium"
                // margin="auto"
                alignItems="center"
                // style={{ justifyContent: "center" }}
              >
                View Profile
              </Button>
            </CardContent>
            {/* <CardActions> */}

            {/* </CardActions> */}
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};
export default ApplicantCard;
