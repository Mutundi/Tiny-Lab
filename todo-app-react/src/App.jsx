import react, {useState} from 'react';
import TodoForm from './TodoForm';
import './App.css'

const App = () => {
  //Leverage useState to manage state.
  //todos is a variable that stores todo items
  //setTodos is the function that manage the state in todos variable.

  const [todos, setTodos] = useState([]);

  //A function to add a todo item.
  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}]);
  }

  //A function to toggle complete
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  //A function to delete a todo item
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-4">ToDo App</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
export default App
