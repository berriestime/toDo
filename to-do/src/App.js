import React, { useEffect } from "react";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import "./index.css";
import Context from "./context.jsx";
import Loader from "./Loader.js";
import Modal from "./Modal/Modal.js";

const AddToDo = React.lazy(() => import("./components/AddToDo/AddToDo.jsx"));

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addToDo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal></Modal>

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddToDo onCreate={addToDo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
