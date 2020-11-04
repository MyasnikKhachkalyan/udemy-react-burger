import React from "react";
import { BurgerIngredients } from "../../../containers/BurgerBuilder/BurgerBuilder";
import { IngredientType } from "../BurgerIngredients/BurgerIngredient";

interface PropModel extends BurgerIngredients {
  price: number
}

const burgerSummary = (props: PropModel) => {
  const summary = Object.keys(props.ingredients).map((igKey) => (
    <li key={ igKey }>
      <span style={ {textTransform: 'capitalize'} }>{ igKey }</span>: { props.ingredients[igKey as IngredientType] }
    </li>
  ));
  return (
    <div>
      <h3>Your order</h3>
      <p>burger with ingredients bellow</p>
      <p><strong>Total: { props.price.toFixed(2) }</strong></p>
      <ul>
        { summary }
      </ul>
    </div>
  );
};

export default burgerSummary;