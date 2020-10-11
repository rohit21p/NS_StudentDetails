import { Grid } from "@material-ui/core";
import Student from "./components/Student";
import { makeStyles } from "@material-ui/core/styles";
import { students } from "./utils/students";
import React from "react";

const useStyles = makeStyles((theme) => ({
  student: {
    margin: "20px",
    cursor: "pointer"
  }
}));

export default function App() {
  const classes = useStyles();
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleClick = (id) => {
    if (selectedStudent === id) setSelectedStudent(null);
    else setSelectedStudent(id);
  };

  return (
    <Grid container>
      {students.map((student) => (
        <Grid
          item
          key={student.id}
          className={classes.student}
          onClick={() => handleClick(student.id)}
        >
          <Student details={student} show={selectedStudent === student.id} />
        </Grid>
      ))}
    </Grid>
  );
}
