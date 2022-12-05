import React from "react";

export const Done = (props) => {
  const { done, onClickIncomplete } = props;
  return (
    <div className="completed-area">
      <p className="title">Done</p>
      <ul>
        {done.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickIncomplete(index)}>
                  incomplete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
