import { useEffect, useState } from "react";

import AddToDo from "../components/todo/AddToDo";
import ToDoList from "../components/todo/ToDoList";

function Todo() {
  const [toDoList, setToDoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get todos from realtime db
  useEffect(() => {
    fetch("https://learning-react-96db8-default-rtdb.firebaseio.com/todos.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = [];
        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };
          todos.push(todo);
        }
        setToDoList(todos.filter((item) => item.isCompleted !== true));
        setIsLoading(false);
      });
  }, []);

  function addItemHandler(todoData) {
    fetch(
      "https://learning-react-96db8-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todoData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json(); // returns id of new item added to db
      })
      .then((id) => {
        const todo = {
          id: id.name, // here's the id we retrieve, so we can display the new item in frontend
          ...todoData,
        };

        setToDoList(toDoList.concat(todo));
      });
  }

  function completeTaskHandler(todoId, todoData) {
    fetch(
      `https://learning-react-96db8-default-rtdb.firebaseio.com/todos/${todoId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(todoData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      const remaining = toDoList.filter((item) => item.id !== todoId);
      setToDoList(remaining);
    });
  }

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  function deleteTaskHandler(taskId) {
    setToDoList(toDoList.filter((item) => item.id !== taskId));
  }

  return (
    <div>
      <h1>To Do's</h1>
      <AddToDo addItem={addItemHandler} />
      <ToDoList
        list={toDoList}
        complete={completeTaskHandler}
        delete={deleteTaskHandler}
      />
    </div>
  );
}

export default Todo;
