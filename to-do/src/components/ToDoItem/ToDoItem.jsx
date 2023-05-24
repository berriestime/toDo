import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoItem.css";
import Context from "../../context";

const cn = (...args) => args.join(" ");

function ToDoItem({ todo, idx, handled }) {
  const { removeToDo } = useContext(Context);

  return (
    <li className={cn(styles.li, todo.completed ? "done" : "")}>
      <span>
        <input
          className={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => handled(todo.id)}
        />
        <strong>{idx + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={removeToDo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  handled: PropTypes.func.isRequired,
};

export default ToDoItem;
