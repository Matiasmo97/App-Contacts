import React from "react";
// import Logo from "../img/Icon.png";
import { NavLink } from "react-router-dom";
import style from "./style/Nav.module.css";
// import Friends from "../img/Friends.gif";

function Nav() {
  return (
    <nav>
      <div>
        {/* <img src={Logo} alt="Logo" width={30} /> */}
        <NavLink  className={style.title_app} to={"/"}>
        App Contacts
        </NavLink>
      </div>
      <div className={style.content_title}>
        <NavLink className={style.title} to="/contacts" exact>
          Contactos
        </NavLink>
        <NavLink className={style.title} to="/favoritos" exact>
          Favoritos
        </NavLink>
        <NavLink className={style.title} to="/add-contact" exact>
          Agregar
        </NavLink>
        {/* <div>
          <img src={Friends} alt="Friends" width={300} />
        </div> */}
      </div>
    </nav>
  );
}

export default Nav;
