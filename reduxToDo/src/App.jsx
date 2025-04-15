
import TodoHeading from './components/ToDoHeading';
import TodoInput from './components/TodoInput';
import TodoList from './components/todoList';


const App = () => {
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-6">
      <div className="w-full max-w-md">
        <TodoHeading />
        <TodoInput  />
        <TodoList  />
      </div>
    </div>
  );
};

export default App;
