import React from "react";

//コンポーネント内でstyleを管理するのもあり
const style = {
  backgroundColor: "#c1ffff",
  width: "440px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChangeToDoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDo"
        value={todoText}
        onChange={onChangeToDoText}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
};
