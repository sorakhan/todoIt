import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CompleteButton from "../ui/CompleteButton";
import PickADate from "../ui/PickADate";

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

  function extractDate() {
    const date = new Date(props.scheduledDate);
    const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return fullDate;
  }

  return (
    <li className={style.item} key={props.id}>
      {!props.isCompleted && <CompleteButton complete={completeHandler} />}
      <div className={style.title}>{props.title}</div>
      <div className={style.side}>
        {/* <PickADate className={style.date} date={new Date(props.scheduledDate)}/> */}
        <div className={style.date}>{extractDate()}</div>

        {/* <div className={style.btnDelete}> */}
        <button className={style.btnEdit}>
          <EditIcon />
        </button>
        <button className={style.btnDelete} onClick={deleteHandler}>
          <DeleteIcon />
        </button>
        {/* </div> */}
      </div>
    </li>
  );
}

export default ToDoItem;
