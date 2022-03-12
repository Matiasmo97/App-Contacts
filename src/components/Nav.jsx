import React from "react";
// import Logo from "../img/Icon.png";
import { NavLink } from "react-router-dom";
import style from "./style/Nav.module.css";
// import Friends from "../img/Friends.gif";

function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.title__app}>
        <NavLink  className={style.title__link} to={"/"}>
        App Contacts
        </NavLink>
      </div>
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
    </nav>
  );
}

export default Nav;
