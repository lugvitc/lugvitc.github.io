import React from "react";
import classes from "./Hint.module.css";

function Hint(props) {
  return (
    <div>
      <p>{props.hint}</p>
    </div>
  );
}

export default Hint;
