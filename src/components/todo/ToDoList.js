import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";

import style from "./TodoList.module.css";

const dummyTodo = [
  {
    id: "td1",
    title: "My first to do",
  },
  {
    id: "td2",
    title: "Drink water",
  },
  {
    id: "td3",
    title: "Exercise",
  },
];

function ToDoList() {
  const [toDoList, setToDoList] = useState(dummyTodo);

  function addItemHandler(title) {
    // temp dummy way of adding new to-dos
    const total = toDoList.length;
    const newItem = {
      id: "td" + (total + 1),
      title: title,
    };

    // toDoList.concat(newItem);
    setToDoList(() => {
      return toDoList.concat(newItem);
    });
  }

  function completeItemHandler(todoId) {
    setToDoList(() => {
      return toDoList.filter((item) => item.id !== todoId);
    });
  }

  return (
    <div>
      <ul className={style.list}>
        <AddToDo add={addItemHandler} />
        {toDoList.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            complete={completeItemHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
