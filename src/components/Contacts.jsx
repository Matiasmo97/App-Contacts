import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style/Contacts.module.css"
import Contact from "../img/Contacts.gif"

function Contacts({ contacts }) {
  return (
    <div className={style.container} >
      <ul>
        {/* Recorremos el array(contacts) con todos los contactos agregados */}
        {contacts.map((contact) => (
          <div key={contact.id}>
          <NavLink className={style.links} to={`/contact/${contact.id}`}>
            <li className={style.li}>{`${contact.name} ${contact.surname}`}</li>
          </NavLink>
          </div>
        ))}
      </ul>
      <div>
        <img  className={style.img} src={Contact} alt="Contact" width={300}/>
      </div>
    </div>
  );
}
//Nos traemos el estado del array de contactos
function mapStateToProps(state) {
  return {
    contacts: state,
  };
}

export default connect(mapStateToProps)(Contacts);
