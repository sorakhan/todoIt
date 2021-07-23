import SidebarNav from "./SidebarNav";

import style from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <SidebarNav></SidebarNav>
      <section className={style.content}>{props.children}</section>
    </div>
  );
}

export default Layout;
