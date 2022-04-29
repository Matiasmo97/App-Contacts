import React from "react";
import style from "./style/Home.module.css"
import home from "../img/home.svg"
import 'animate.css';

function Home() {
  return (
    <div className="animate__animated animate__zoomIn">
    <div className={style.conteiner}>
      <h3>Welcome to Contacts</h3>
      <img src={home} alt="Home"/>
    </div>
    </div>
  );
}

export default Home;