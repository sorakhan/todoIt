import { useRef } from "react";
import style from "./AddToDo.module.css";

function AddToDo(props) {
  const titleRef = useRef();

  function addHandler(event) {
    event.preventDefault();
    const todoTitle = titleRef.current.value;
    props.add(todoTitle);
  }

  return (
    <div>
      <form onSubmit={addHandler}>
        <div>
          <label htmlFor="title"></label>
          <input className={style.input} type="text" id="title" required ref={titleRef}/>
        </div>
        <div>
          <button className={style.btn}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
