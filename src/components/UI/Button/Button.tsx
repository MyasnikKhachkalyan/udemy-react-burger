import React from "react";
import classes from "./Button.module.css";

type ButtonType = 'Success' | 'Danger';

const button = (props: {
  children: any;
  type: ButtonType,
  click: any,
}) => {
  return (
    <button className={ [classes.Button, classes[props.type]].join(' ') }
            onClick={ props.click }>{ props.children }</button>
  );
};

export default button;