import React from "react";
import classes from "./MyInput.module.css";
const MyInput = ({ input, meta: { touched, error, warning }, ...props }) => {
  return (
    <input
      className={classes.myInput + " " + touched && error ? classes.error : " "}
      {...input}
      {...props}
      placeholder={error ? error : " "}
    />
  );
};

export default MyInput;
