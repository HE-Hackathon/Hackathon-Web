import React from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import { Grid, Tooltip } from "@material-ui/core";
const WorkEx = (props) => {

  const styles = {
    fontFamily: "Arial",
    fontSize: "1.2em",
    margin: 10,
    width : "100%"
  };

  const classes = props.classes;
  return (
    <Grid xs={12} lg={12} >
      {props.data.map((value, index) => (
        <GridItem item xs={12} lg={12} sm={12} style={styles} key={value.id}>
          <Card className={classes.root} style={{ padding: 10 }}>
            <CardHeader
              action={
                <Tooltip title="Delete Work Experience">
                <DeleteIcon
                  onClick = { () => props.handleDelete(value.id) }                   
                  style={{ marginRight: 5, cursor : "pointer" }}                  
                ></DeleteIcon>
                </Tooltip>
              }
              title={value.position}
            />
            <CardContent style={{ marginTop : '-2rem' }}>
              <Typography variant="body2" color="black" component="p">
                <h4>
                  <b> Company :  {value.company_name}</b>
                </h4>

                <p>
                  {moment(value.start_year).format('YYYY')} -{moment(value.end_year).format('YYYY')}
                </p>
                <br />
                <p>{value.description ? <p>{value.description}</p> : null}</p>
              </Typography>
            </CardContent>
          </Card>
          <br />
        </GridItem>
      ))}
      ;
    </Grid>
  );
};
export default WorkEx;