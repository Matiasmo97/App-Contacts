import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./style/Nav.module.css";
import Logo from "../img/Logo.png";
import "animate.css";
import HandleSwitch from "./HandleSwitch";

function Nav() {
  const [checked, setChecked] = useState(false);

  return (
    <nav className={style.nav}>
      <div className={style.title__app}>
        <div className={style.name}>
          <NavLink to={"/"}>
            <img src={Logo} alt="Logo" width={60} className={style.logo} />
          </NavLink>
          <h3>CONTACT</h3>
        </div>
        <div>
          <HandleSwitch id="checkbox" checked={checked} onChange={setChecked} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
