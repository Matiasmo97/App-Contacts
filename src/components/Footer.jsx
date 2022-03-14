import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/Footer.module.css";
import { MdOutlineContacts, MdPersonAdd } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import "animate.css";

function Footer() {
  return (
    <footer className={style.container}>
        <div className="animate__animated animate__bounceInLeft">
          <NavLink className={style.link} to="/contacts" exact>
            <MdOutlineContacts style={{ color: "orange", fontSize: "33px", padding: "1rem" }} />
          </NavLink>
        </div>
        <div className="animate__animated animate__bounceInLeft">
          <NavLink className={style.link} to="/favoritos" exact>
            <AiOutlineStar style={{ color: "orange", fontSize: "33px", padding: "1rem" }} />
          </NavLink>
        </div>
        <div className="animate__animated animate__bounceInLeft">
          <NavLink className={style.link} to="/add-contact" exact>
            <MdPersonAdd style={{ color: "orange", fontSize: "33px", padding: "1rem" }} />
          </NavLink>
        </div>
    </footer>
  );
}

export default Footer;
