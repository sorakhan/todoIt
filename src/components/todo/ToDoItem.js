import style from "./TodoItem.module.css";

function ToDoItem(props) {
  function completeHandler() {
    const todo = {
      title: props.title,
      isCompleted: true,
    };
    props.complete(props.id, todo);
  }

  function deleteHandler() {
    props.delete(props.id);
  }

  return (
    <li className={style.item} key={props.id}>
      {!props.isCompleted && (
        <div>
          <button
            className={style.btnComplete}
            onClick={completeHandler}
          ></button>
        </div>
      )}
      <div className={style.title}>{props.title}</div>
      <div className={style.btnDelete}>
        <button onClick={deleteHandler}>X</button>
      </div>
    </li>
  );
}

export default ToDoItem;
