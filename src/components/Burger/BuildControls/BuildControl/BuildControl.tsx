import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props: { label: string, disabled: boolean, addIng: any, removeIng: any }) => {
  return (
    <div className={ classes.BuildControl }>
      <div className={ classes.Label }>{ props.label }</div>
      <button className={ classes.More } onClick={ props.addIng }>More</button>
      <button className={ classes.Less } onClick={ props.removeIng } disabled={ props.disabled }>Less</button>
    </div>
  )
};

export default buildControl;