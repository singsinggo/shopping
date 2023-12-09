import React, { useState } from "react";

const ShoppingInput = ({ onAdd, onReset }) => {
  const [text, setText] = useState("");

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
    onAdd(text);
    setText("");
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
      <button onClick={onReset}>모두 삭제</button>
    </>
  );
};

export default ShoppingInput;
