import { Link } from "react-router-dom";

import style from "./SidebarNav.module.css";

function SidebarNav() {
  return (
    <div className={style.side}>
      <h1 className={style.title}>
        Todo<span className={style.highlight}>It</span>
      </h1>
      <ul className={style.content}>
        <Link to="/">
          <li>Today</li>
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
