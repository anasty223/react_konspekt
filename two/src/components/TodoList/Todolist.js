import React from "react";
import "./TodoList.css";
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, complited }) => (
      <li
        key={id}
        className={classNames("TodoList__item", {
          "TodoList__item--complited": complited,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={complited}
          onChange={() => onToggleComplited(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
