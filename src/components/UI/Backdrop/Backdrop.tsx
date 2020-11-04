import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props: { cancel: any, show: boolean }) => {
  return props.show ? (<div className={ classes.Backdrop } onClick={ props.cancel }/>) : null
};

export default backdrop;