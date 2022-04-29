import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style/Contacts.module.css";
import Contact from "../img/Contacts.svg";
import iconContact from "../img/icon-contact.png"
import "animate.css";

function Contacts({ contacts }) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className={style.container}>
        <div>
          <img className={style.img} src={Contact} alt="Contact" width={230} height={250} />
        </div>
      </div>
      <div className={style.container__contacts}>
        <ul>
          {/* Recorremos el array(contacts) con todos los contactos agregados */}
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div className={style.contentContacts} key={contact.id}>
                <NavLink className={style.links} to={`/contact/${contact.id}`}>
                  <li
                    className={style.li}
                  ><img className={style.imgContact} src={iconContact} alt="imgContact" width={35} /> {`${contact.name} ${contact.surname}`}</li>
                </NavLink>
              </div>
            ))
          ) : (
            <div>
              <h2 className={style.h2}>You have no added contacts</h2>
            </div>
          )}
        </ul>
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
