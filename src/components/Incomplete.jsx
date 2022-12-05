import React from "react";

export const Incomplete = (props) => {
  const { undo, onClickComplete, onClickDetete } = props;
  return (
    <div className="undo-area">
      <p className="title">Incomplete</p>
      <ul>
        {undo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>complete</button>
                <button onClick={() => onClickDetete(index)}>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
