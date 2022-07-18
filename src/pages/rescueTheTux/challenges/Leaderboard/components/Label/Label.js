import React from "react";
import { motion } from "framer-motion";
import classes from "./Label.module.css";

function Label(props) {
  let widthValue = props.value + "%";
  return (
    <div className={`${classes.box} ${classes.box_inner}`}>
      <motion.div
        layout
        transition={{ duration: 1, type: "spring" }}
        className={`${classes.box} ${classes.box_value}`}
        style={{ width: widthValue }}
      ></motion.div>
    </div>
  );
}

export default Label;
