import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  const updatedIngredientToAdd = {
    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
  };
  const updatedIngredientsToAdd = updateObject(state.ingredients, updatedIngredientToAdd);
  const updatedStateFromAdd = {
    ingredients: updatedIngredientsToAdd,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
  };
  return updateObject(state, updatedStateFromAdd);
};

const removeIngredient = (state, action) => {
  const updatedIngredientToRemove = {
    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
  };
  const updatedIngredientsToRemove = updateObject(state.ingredients, updatedIngredientToRemove);
  const updatedStateFromRemove = {
    ingredients: updatedIngredientsToRemove,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName]
  };
  return updateObject(state, updatedStateFromRemove);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.payload.ingredients,
    totalPrice: 4,
    error: false
  });
};

const fetchIngredientsFail = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAIL:
      return fetchIngredientsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
