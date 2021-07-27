import React, { useState } from "react";
import DatePicker from "react-datepicker";

import style from "./PickADate.module.css";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

function PickADate(props) {
  const [startDate, setStartDate] = useState(props.date);
  console.log(startDate);
  return (
    <DatePicker
      className={style.datePicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default PickADate;
