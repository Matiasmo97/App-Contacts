import React from "react";
import style from "./style/Home.module.css"
import Friends2 from "../img/Friends2.gif"
import 'animate.css';

function Home() {
  return (
    <div className="animate__animated animate__zoomIn">
    <div className={style.conteiner}>
      <h3>Welcome to Contacts</h3>
      <img src={Friends2} alt="Friends2" width={300}/>
    </div>
    </div>
  );
}

export default Home;