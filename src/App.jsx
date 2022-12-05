import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/Incomplete";
import { Done } from "./components/Done";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [undo, setUndo] = useState([]);
  const [done, setUndone] = useState([]);

  const onChangeToDoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...undo, todoText];
    setUndo(newTodo);
    setTodoText("");
  };
  const onClickDetete = (index) => {
    const newTodo = [...undo];
    newTodo.splice(index, 1);
    setUndo(newTodo);
  };
  const onClickComplete = (index) => {
    const newDone = [...done, undo[index]];
    const newTodo = [...undo];
    newTodo.splice(index, 1);
    setUndo(newTodo);
    setUndone(newDone);
  };
  const onClickIncomplete = (index) => {
    const newDone = [...done];
    const newTodo = [...undo, done[index]];
    newDone.splice(index, 1);
    setUndo(newTodo);
    setUndone(newDone);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeToDoText={onChangeToDoText}
        onClickAdd={onClickAdd}
        disabled={undo.length >= 5}
      />
      {undo.length >= 5 && (
        <p style={{ color: "red" }}>Max:5! Please clear the TASK!!</p>
      )}
      <Incomplete
        undo={undo}
        onClickComplete={onClickComplete}
        onClickDetete={onClickDetete}
      />
      <Done done={done} onClickIncomplete={onClickIncomplete} />
    </>
  );
};
