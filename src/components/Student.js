import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
    boxShadow: "2px 2px 10px 2px gray"
  },
  detail: {
    margin: "5px"
  }
}));

function Student(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} direction="column">
      <Grid item className={classes.detail}>
        {props.details.name}
      </Grid>
      {props.show
        ? [
            <Grid item className={classes.detail}>
              Teacher: {props.details.teacher}
            </Grid>,
            <Grid item className={classes.detail}>
              Mentor: {props.details.mentor}
            </Grid>
          ]
        : null}
    </Grid>
  );
}

export default Student;
