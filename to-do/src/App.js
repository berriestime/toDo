import ToDoList from "./components/ToDoList/ToDoList.jsx";
import "./index.css";

function App() {
  let todos = [
    { id: 1, completed: false, title: "Пройти курс Минина по реакту" },
    { id: 2, completed: false, title: "Запушить работу за день на гит" },
    { id: 3, completed: false, title: "Заказать продукты из ВВ на завтра" },
  ];

  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  return (
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
      <ToDoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
