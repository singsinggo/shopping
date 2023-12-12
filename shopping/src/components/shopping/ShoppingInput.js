import React, { useState, useEffect } from "react";

const ShoppingInput = ({ onAdd, onReset }) => {
  const [text, setText] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const storedShoppingList = localStorage.getItem("shoppingList");
    if (storedShoppingList) {
      setShoppingList(JSON.parse(storedShoppingList));
    }
  }, []);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // 미입력시 알림창
    if (!text) {
      alert("내용을 입력해 주세요!");
      return;
    }
    setShoppingList([...shoppingList, text]);
    onAdd(text);
    setText("");
  };

  const handleReset = () => {
    setShoppingList([]);
    onReset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={changeInput}
          placeholder="어떤 식품을 추가할까요?"
        />
        <button type="submit">+</button>
      </form>
      <button onClick={handleReset}>모두 삭제</button>
    </>
  );
};

export default ShoppingInput;
