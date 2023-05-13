import React from "react";
import styles from "./ToDoList.css";
import ToDoItem from "../ToDoItem/ToDoItem.jsx";
import PropTypes from "prop-types";

function ToDoList(props) {
  return (
    <ul className={styles.ul}>
      {props.todos.map((todo, idx) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            idx={idx}
            handled={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToDoList;
