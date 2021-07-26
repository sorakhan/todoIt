import ToDoItem from "./ToDoItem";
import style from "./TodoList.module.css";

function ToDoList(props) {
  function deleteItemHandler(todoId) {
    fetch(
      `https://learning-react-96db8-default-rtdb.firebaseio.com/todos/${todoId}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      props.delete(todoId);
    });
  }

  return (
    <div>
      <ul className={style.list}>
        {props.list.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            complete={props.complete}
            delete={deleteItemHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
