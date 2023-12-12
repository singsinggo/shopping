const ShoppingItem = ({ list, onDel }) => {
  const { id, text } = list;
  return (
    <li>
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default ShoppingItem;
