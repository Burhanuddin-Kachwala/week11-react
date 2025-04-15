import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onInputTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleAddClick = (e) => {
    e.preventDefault();
    addTodo(); // addTodo 
    setTodo("");
  };
  const addTodo = () => {
    //dispatch action to add a todo
        return dispatch({
          type: "todos/addedTodo",
          payload: { id: Math.floor(Math.random() * 20) + 1.1, item: todo },
        });
      };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        value={todo}
        onChange={onInputTodo}
        placeholder="Enter the task for today"
        className="flex-1 p-2 rounded-l bg-gray-100 text-gray-900"
      />
      <button
        onClick={handleAddClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-r"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
