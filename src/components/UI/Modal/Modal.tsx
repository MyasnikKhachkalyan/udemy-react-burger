import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const modal = (props: any) => {
  return (
    <Aux>
      <Backdrop cancel={ props.cancelHandler } show={ props.show }/>
      <div
        className={ classes.Modal }
        style={ {
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        } }
      >
        { props.children }
        <Button type={"Success"} click={ props.successHandler }>Check out</Button>
        <Button type={"Danger"} click={ props.cancelHandler }>Cancel</Button>
      </div>
    </Aux>
  );
};

export default modal;