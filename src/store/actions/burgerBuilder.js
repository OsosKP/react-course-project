import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const INGREDIENTS_ENDPOINT = '/ingredients.json';

export const addIngredient = (data) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredientName: data
    }
  };
};

export const removeIngredient = (data) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredientName: data
    }
  };
};

export const setIngredients = (data) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: {
      ingredients: data
    }
  };
};

export const fetchIngredientsFail = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(INGREDIENTS_ENDPOINT)
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchIngredientsFail());
      });
  };
};
