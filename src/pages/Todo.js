import { useContext, useEffect, useState } from "react";

import AddToDo from "../components/todo/AddToDo";
import ToDoList from "../components/todo/ToDoList";
import TodoContext from "../store/TodoContext";

function Todo() {
  const todoCtx = useContext(TodoContext);
  const [isLoading, setIsLoading] = useState(true);

  // get todos from realtime db
  useEffect(() => {
    fetch("https://learning-react-96db8-default-rtdb.firebaseio.com/todos.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let todos = [];
        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };
          todos.push(todo);
        }
        todos = todos.filter((item) => item.isCompleted !== true);
        todoCtx.updateTodos(todos);
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

        todoCtx.updateTodos(todoCtx.taskList.concat(todo));
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
      const remaining = todoCtx.taskList.filter((item) => item.id !== todoId);
      todoCtx.updateTodos(remaining);
    });
  }

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  function deleteTaskHandler(taskId) {
    todoCtx.updateTodos(todoCtx.taskList.filter((item) => item.id !== taskId));
  }

  return (
    <div>
      <h1>To Do's</h1>
      <AddToDo addItem={addItemHandler} />
      <ToDoList
        list={todoCtx.taskList.filter((item) => item.isCompleted !== true)}
        complete={completeTaskHandler}
        delete={deleteTaskHandler}
      />
    </div>
  );
}

export default Todo;
