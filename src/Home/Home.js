import React from "react";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Navbar from '../Containers/nav/Navbar'
import Board from "../Containers/board/Board"
// import Sidebar from "../Containers/sidebar/Sidebar";
import style from "./Home.module.css";


export default function Home() {
  return (
    <div className={style.bg}>
        <Navbar/>
        
      <Board/>
    </div>
  )
}
