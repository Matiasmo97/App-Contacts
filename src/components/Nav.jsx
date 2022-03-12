import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/Nav.module.css";
import Logo from "../img/Logo.gif"
import 'animate.css';


function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.title__app}>
        <NavLink  className={style.title__link} to={"/"}>
        <img src={Logo} alt="Logo" width={50} />
        Contacts
        </NavLink>
      </div>
      <div className="animate__animated animate__bounceInLeft">
      <div className={style.content_title}>
        <NavLink className={style.title} to="/contacts" exact>
          Contacts
        </NavLink>
        <NavLink className={style.title} to="/favoritos" exact>
          Favorites
        </NavLink>
        <NavLink className={style.title} to="/add-contact" exact>
          Add Contact
        </NavLink>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
