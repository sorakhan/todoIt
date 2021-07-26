import style from "./CompleteButton.module.css";

function CompleteButton(props) {
  return (
    <div>
      <button className={style.btnComplete} onClick={props.complete}></button>
    </div>
  );
}

export default CompleteButton;
