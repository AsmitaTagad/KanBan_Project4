import React from "react";
import style from "./AddList.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";

const AddList = ({ handleAddList, listTitle, setListTitle }) => {
  const [showInputBox, setShowInputBox] = React.useState(false);
  return (
    <>
      {showInputBox ? (
        <div className={style.addList}>
          <input
            type="text"
            placeholder="Enter List Title..."
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <span>
            <button onClick={handleAddList}>Add Task</button>
            <CloseIcon onClick={() => setShowInputBox(false)} />
          </span>
        </div>
      ) : (
        <div
          className={style.addListContainer}
          onClick={() => setShowInputBox(true)}
        >
          <AddOutlinedIcon />
          <p>Add Board</p>
        </div>
      )}
    </>
  );
};

export default AddList;
