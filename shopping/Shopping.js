import React, { useRef, useState } from "react";
import ShoppingInput from "./ShoppingInput";
import ShoppingList from "./ShoppingList";
import LinkBanner from "./LinkBanner";

const Shopping = () => {
  const [data, setData] = useState([]);

  const no = useRef(1);

  // 추가
  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: no.current++,
        text,
      },
    ]);
  };

  // 삭제
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };

  // 모두 삭제
  const onReset = () => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      setData([]);
    }
  };
  return (
    <>
      <h2>장보러 싱싱고</h2>
      <ShoppingInput onAdd={onAdd} onReset={onReset} />
      <ShoppingList data={data} onDel={onDel} />
      <LinkBanner />
    </>
  );
};

export default Shopping;
