import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/Nav.module.css";
import Logo from "../img/Logo.gif"
import Name from "../img/Name.gif"
import 'animate.css';


function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.title__app}>
        <NavLink  className={style.title__link} to={"/"}>
        <img src={Logo} alt="Logo" width={60} />
        <img src={Name} alt="Name" width={90}/>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
