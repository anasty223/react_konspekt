import React from "react";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

const Todo = ({ text, onToggleComplited, onDelete, complited }) => (
  <>
    {" "}
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={complited}
      onChange={onToggleComplited}
    />
    <p className="TodoList__text">{text}</p>
    <IconButton onClick={onDelete}>
      {" "}
      <DeleteIcon width="40" heigth="40" fill="white" />
    </IconButton>
  </>
);

export default Todo;
