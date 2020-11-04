import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import { IngredientType } from "../BurgerIngredients/BurgerIngredient";

export interface BuildControlModel {
  type: IngredientType;
  label: string
}

const ctrls: BuildControlModel[] = [
  {type: "bacon", label: 'Bacon'},
  {type: "cheese", label: 'Cheese'},
  {type: "meet", label: 'Meet'},
  {type: "salad", label: 'Salad'}
];

const buildControls = (props: any) => {
  return (
    <div className={ classes.BuildControl }>
      <p>Current Price: <strong>{ props.total.toFixed(2) }</strong></p>
      { ctrls.map((ctrl) => (
        <BuildControl
          key={ ctrl.type }
          label={ ctrl.label }
          disabled={ props.disabledInfo[ctrl.type] <= 0 }
          addIng={ () => props.ingAdded(ctrl.type) }
          removeIng={ () => props.ingRemoved(ctrl.type) }/>
      )) }
      <button className={ classes.OrderButton } disabled={ !props.purchasable } onClick={ props.purchasing }>
        ORDER NOW
      </button>
    </div>
  )
}

export default buildControls;