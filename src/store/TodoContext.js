import { createContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider(props) {
  const [taskList, setTaskList] = useState([]);

  function updateTodosHandler(tasks) {
    setTaskList(tasks);
  }

  const context = {
    taskList: taskList,
    totalTodos: taskList.length,
    updateTodos: updateTodosHandler,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
