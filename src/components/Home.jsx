import React from "react";
import style from "./style/Home.module.css"
import Friends2 from "../img/Friends2.gif"
 
function Home() {
  return (
    <div className={style.conteiner}>
      <h3>Bienvenido a Contact</h3>
      <img src={Friends2} alt="Friends2" width={300}/>
    </div>
  );
}

export default Home;