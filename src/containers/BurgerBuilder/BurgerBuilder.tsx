import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import { IngredientType } from "../../components/Burger/BurgerIngredients/BurgerIngredient";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import BurgerSummary from "../../components/Burger/BurgerSummary/BurgerSummary";

export type BurgerIngredients = {
  ingredients: { [k in IngredientType]: number }
};

interface BurgerBuilderModel extends BurgerIngredients {
  totalPrice: number,
  purchasable: boolean,
  purchasing: boolean
}

const INGREDIENT_PRICE: { [k in IngredientType]: number } = {
  meet: 1.3,
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.3
};

class BurgerBuilder extends Component<any, BurgerBuilderModel> {
  state: BurgerBuilderModel = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meet: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  startPurchasing = () => {
    this.setState({purchasing: true});
  }

  cancelPurchasing = () => {
    this.setState({purchasing: false});
  }

  continuePurchasing = () => {
    alert('done');
  }

  changePurchasableState = (ings: BurgerIngredients['ingredients']) => {
    const sum = Object.keys(ings).map((key: string) => ings[key as IngredientType]).reduce((sum, el) => (sum + el), 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredient = (type: IngredientType) => {
    const newIngCount = this.state.ingredients[type] + 1;
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    const newState = {...this.state};
    newState.ingredients[type] = newIngCount;
    newState.totalPrice = newTotalPrice;
    this.setState(newState);
    this.changePurchasableState(newState.ingredients);
  }

  removeIngredient = (type: IngredientType) => {
    if (this.state.ingredients[type] > 0) {
      const newIngCount = this.state.ingredients[type] - 1;
      const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      const newState = {...this.state};
      newState.ingredients[type] = newIngCount;
      newState.totalPrice = newTotalPrice;
      this.setState(newState);
      this.changePurchasableState(newState.ingredients);
    }
  }

  render() {
    return (
      <Aux>
        <Modal show={ this.state.purchasing } cancelHandler={ this.cancelPurchasing }
               successHandler={ this.continuePurchasing }>
          <BurgerSummary ingredients={ this.state.ingredients } price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={ this.state.ingredients }/>
        <BuildControls
          ingAdded={ this.addIngredient }
          ingRemoved={ this.removeIngredient }
          disabledInfo={ this.state.ingredients }
          total={ this.state.totalPrice }
          purchasable={ this.state.purchasable }
          purchasing={ this.startPurchasing }/>
      </Aux>
    );
  }
}

export default BurgerBuilder;