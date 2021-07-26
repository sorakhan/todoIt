import { useContext } from "react";
import { Link } from "react-router-dom";

import TodoContext from "../../store/TodoContext";
import style from "./SidebarNav.module.css";

function SidebarNav() {
  const todoCtx = useContext(TodoContext);

  return (
    <div className={style.side}>
      <h1 className={style.title}>
        Todo<span className={style.highlight}>It</span>
      </h1>
      <ul className={style.content}>
        <Link to="/">
          <li>Today ({todoCtx.totalTodos})</li>
        </Link>
        <Link to="/upcoming">
          <li>Next</li>
        </Link>
        <Link to="/completed">
          <li>Completed</li>
        </Link>
      </ul>
    </div>
  );
}

export default SidebarNav;
