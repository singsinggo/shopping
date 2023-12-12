import { ADD_FOOD } from "./types";

export const addFood = (food) => {
  return {
    type: ADD_FOOD,
    payload: food,
  };
};

const initialState = {
  foodItems: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodItem: [...state.foodItems, action.payload],
      };
    default:
      return state;
  }
};

export default foodReducer;
