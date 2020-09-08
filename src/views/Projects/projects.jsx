import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import GridItem from "components/Grid/GridItem.js";
import DeleteIcon from "@material-ui/icons/Delete";

const Project = (props) => {

  const styles = {
    fontFamily: "Times New Roman",
    marginLeft: 10,
  };
  const [expanded, setExpanded] = React.useState(false);
  const classes = props.classes;

  
  return (
    <div>
      {props.data.map((value, index) => (
        <GridItem item lg={12} sm={5} xs={5} style={styles}>
          <Card key={index} className={classes.root} style={{ padding: 10 }}>
            <CardHeader
              action={
                <DeleteIcon 
                    onClick = { () => props.handleDelete(value.id) }  
                    style={{ marginRight: 3 }}></DeleteIcon>
                }
              title={value.name}
            />

            <CardContent>
              <Typography variant="body2" color="black" component="p">
                {value.technologies_used ? (
                  <h4>
                    <b>Technologies Used:</b> {value.technologies_used}
                  </h4>
                ) : null}
                <p>{value.description ? <p>{value.description}</p> : null}</p>
              </Typography>
            </CardContent>
          </Card>
          <br />
        </GridItem>
      ))}
      ;
    </div>
  );
};

export default Project;
