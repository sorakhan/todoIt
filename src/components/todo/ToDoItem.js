import style from "./TodoItem.module.css";

function ToDoItem(props) {
  function completeHandler() {
    // [] This should move to Completed page!!! 
    props.complete(props.id);
  }

  function deleteHandler() {
    // [] This should delete the todo and not exist anywhwere
    props.complete(props.id);
  }

  return (
    <li className={style.item} key={props.id}>
      <div>
        <button className={style.btnComplete} onClick={completeHandler}></button>
      </div>
      <div className={style.title}>{props.title}</div>
      <div className={style.btnDelete}>
        <button onClick={deleteHandler}>X</button>
      </div>
    </li>
  );
}

export default ToDoItem;
