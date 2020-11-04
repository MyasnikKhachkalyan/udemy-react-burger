import React from "react";
import classes from './Burger.module.css'
import BurgerIngredient, { IngredientType } from './BurgerIngredients/BurgerIngredient'
import { BurgerIngredients } from "../../containers/BurgerBuilder/BurgerBuilder";

const burger = (props: BurgerIngredients) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey as IngredientType])].map((_, i) => {
      return <BurgerIngredient type={ igKey as IngredientType } key={ igKey + i }/>
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  return (
    <div className={ classes.Burger }>
      <BurgerIngredient type="bread-top"/>
      { transformedIngredients.length ? transformedIngredients : 'Please add ings' }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;