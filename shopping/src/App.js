import React from "react";
import "./App.css";
import Login from "./components/account/Login";
import LocationList from "./components/home/LocationList";
import FoodList from "./components/food/FoodList";
import FoodAdd from "./components/food/FoodAdd";
import Shopping from "./components/shopping/Shopping";
import Food from "./components/food/Food";

const App = () => {
  return (
    <>
      {/* <LocationList /> */}
      {/* <Food /> */}
      <hr />
      <hr />
      {/* <FoodAdd /> */}
      <Shopping />
    </>
  );
};

export default App;
