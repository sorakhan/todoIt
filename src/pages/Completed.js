import { useEffect, useState } from "react";

import ToDoList from "../components/todo/ToDoList";

function Completed() {
  const [completedList, setCompletedList] = useState([]);

  // get completed from realtime db
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
        setCompletedList(todos.filter((item) => item.isCompleted === true));
        // setIsLoading(false);
      });
  }, []);

  function deleteTaskHandler(taskId) {
    setCompletedList(completedList.filter((item) => item.id !== taskId));
  }

  return (
    <div>
      <h1>Completed</h1>
      {completedList.length === 0 ? (
        <h5>No completed tasks</h5>
      ) : (
        <ToDoList list={completedList} delete={deleteTaskHandler} />
      )}
    </div>
  );
}

export default Completed;
