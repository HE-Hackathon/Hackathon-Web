import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GridItem from "components/Grid/GridItem.js";
import DeleteIcon from "@material-ui/icons/Delete";
const Project = (props) => {
  console.log(props.data);
  const styles = {
    fontFamily: "Times New Roman",
    marginLeft: 10,
  };
  const [expanded, setExpanded] = React.useState(false);
  const classes = props.classes;

  //   console.log("Temp" + tempData);
  return (
    <div>
      {props.data.map((Entry, index) => (
        <GridItem item lg={12} sm={5} xs={5} style={styles}>
          <Card key={index} className={classes.root} style={{ padding: 10 }}>
            <CardHeader
              action={<DeleteIcon style={{ marginRight: 3 }}></DeleteIcon>}
              title={Entry.name}
            />

            <CardContent>
              <Typography variant="body2" color="black" component="p">
                {Entry.technologies_used ? (
                  <h4>
                    <b>Technologies Used:</b> {Entry.technologies_used}
                  </h4>
                ) : null}
                <p>{Entry.description ? <p>{Entry.description}</p> : null}</p>
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
