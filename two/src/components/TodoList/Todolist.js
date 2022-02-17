import React from "react";
import "./TodoList.css";
import classNames from "classnames";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, complited }) => (
      <li
        key={id}
        className={classNames("TodoList__item", {
          "TodoList__item--complited": complited,
        })}
      >
        {" "}
        <Todo
          text={text}
          complited={complited}
          onToggleComplited={() => onToggleComplited(id)}
          onDelete={() => onDeleteTodo(id)}
        />{" "}
      </li>
    ))}
  </ul>
);

export default TodoList;
