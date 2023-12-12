import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ data, onDel }) => {
  return (
    <ul>
      {data.map((list) => (
        <ShoppingItem key={list.id} list={list} onDel={onDel} />
      ))}
    </ul>
  );
};

export default ShoppingList;
