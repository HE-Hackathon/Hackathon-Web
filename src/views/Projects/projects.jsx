import React, { Fragment } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import GridItem from "components/Grid/GridItem.js";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Button, Tooltip } from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import { useSelector } from "react-redux";

const Project = (props) => {
  const isRecruiter = useSelector(state=>state.login).user.isRecruiter

  const styles = {
    fontFamily: "Times New Roman",
    marginLeft: 10,
  };
  const [expanded, setExpanded] = React.useState(false);
  const classes = props.classes;
  console.log(props.data);

  
  return (
    <Grid xs={12} lg={12} >
      {props.data.map((value, index) => (
        <GridItem item lg={12} sm={5} xs={5} style={styles} key={index}>
          <Card key={value.id} className={classes.root} style={{ padding: 10 }}>
            <CardHeader
              action={
                isRecruiter ? "":
                <Tooltip title="Delete Project">
                <DeleteIcon 
                    onClick = { () => props.handleDelete(value.id) }  
                    style={{ marginRight: 3, cursor : "pointer" }}></DeleteIcon>
                </Tooltip>
                }
                title={value.name}
            />

            <CardContent>
              <Typography variant="body2" color="black" component="p">
                
              <p>Technologies Used : {value.techstack.map((val,index)=>(
                  <Fragment>{val}</Fragment>
                ))}</p> 
                <p>{value.description ? <p>{value.description}</p> : null}</p>
                <p>Link:
                <Button
                  style={{ display: 1 ? "display" : "none" }}
                  href={value.link}
                  target="_blank"
                >
                  <LinkIcon/>
                  
                </Button>
                </p>
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

export default Project;
