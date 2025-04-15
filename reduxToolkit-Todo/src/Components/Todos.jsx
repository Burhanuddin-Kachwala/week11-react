import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <>
        <div>Todos</div>
        <div className="flex flex-col gap-3 mt-5">
            {todos.map((todo) => (
                <div key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                    <span className="text-white">{todo.title}</span>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                </div>
            ))}
        </div>
        
    </>
    
  )
}

export default Todos