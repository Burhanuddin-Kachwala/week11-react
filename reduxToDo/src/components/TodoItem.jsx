import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    return dispatch({
      type: "todos/deleteTodo",
      payload: id,
    });
  };
  const onComplete = (id) => {
    return dispatch({
      type: "todos/completeTodo",
      payload: id,
    });
  };

  return (
    <div className="flex justify-between items-center bg-transparent border border-yellow-400 rounded p-4 mb-4">
      <span className={`text-white ${todo.completed ? "line-through" : ""}`}>{todo.item}</span>
      <div className="flex space-x-2">
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded" onClick={() => onComplete(todo.id)}>
        {todo.completed ? "Redo" : "Complete"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
