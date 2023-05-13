import React from "react";
import PropTypes from "prop-types";
import styles from "./ToDoItem.css";

function ToDoItem({ todo, idx, handled }) {
  console.log("todo", todo);
  return (
    <li className={styles.li}>
      <span>
        <input
          className={styles.input}
          type="checkbox"
          onChange={() => handled(todo.id)}
        />
        <strong>{idx + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  handled: PropTypes.func.isRequired,
};

export default ToDoItem;
