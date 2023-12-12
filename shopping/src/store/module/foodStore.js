import { createStore } from "redux";
import foodReducer from "../../action/foodAction";

const foodStore = createStore(foodReducer);

export default foodStore;
