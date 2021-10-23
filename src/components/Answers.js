import React from "react";
import Checkbox from "./Checkbox";
import classes from "../styles/Answers.module.css";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
