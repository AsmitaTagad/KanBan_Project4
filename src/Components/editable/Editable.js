import React, { useState } from "react";
import style from "./Editable.module.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function Editable({ name, setName, addList }) {
  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => {
    setShowBtn(!showBtn);
  };

  const handleClose = () => {
    setShowBtn(!showBtn);
  };

  const dislay = showBtn ? (
    <div className={style.container}>
      <p className={style.buttonDiv} onClick={handleClick}>
        <AddIcon />
        Add a Card
      </p>
    </div>
  ) : (
    <div className={style.btnDiv}>
      <input
        type="text"
        placeholder="Enter a Task"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div className={style.inputBtn}>
        <div className={style.btnAdd}>
          <button onClick={addList}>Add Card</button>
          <span onClick={handleClose}>
            <CloseIcon className={style.closeBtn} />
          </span>
        </div>
      </div>
    </div>
  );

  return <div>{dislay}</div>;
}

export default Editable;
