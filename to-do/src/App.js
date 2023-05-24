import React from "react";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import "./index.css";
import Context from "./context.jsx";
import AddToDo from "./components/AddToDo/AddToDo.jsx";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Пройти курс Минина по реакту" },
    { id: 2, completed: false, title: "Запушить работу за день на гит" },
    { id: 3, completed: true, title: "Codewars" },
    { id: 4, completed: false, title: "itGirls week" },
    { id: 5, completed: false, title: "design" },
    { id: 6, completed: false, title: "English test" },
  ]);

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

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <header>
          <h1>Профессиональная техника для обжарщиков</h1>
          <nav className="title">
            <ul className="nav">
              <li>Главная</li>
              <li>Ростеры</li>
              <li>Кофеварки</li>
              <li className="featured">Акции!</li>
            </ul>
          </nav>
        </header>
        <h1>React tutorial</h1>
        <AddToDo />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
