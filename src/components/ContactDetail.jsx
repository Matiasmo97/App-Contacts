import React from "react";
import { connect } from "react-redux";
import { removeContac, addFav, removeFav } from "../actions";
import style from "./style/ContactDetail.module.css"
import Fav from "../img/Fav.gif"
import 'animate.css';

//Hacemos un destructuring del 'contact' recibido del find aplicado en App.js
function ContactDetail({ contactos, removeContac, addFav, removeFav, push }) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className={style.conteiner}>
      {contactos ? (
        <>
            <h1>Information</h1>
          <div className={style.info}>
            <label className={style.label} >Name: </label>
            <span>{contactos.name}</span>
          </div>
          <div className={style.info}>
            <label className={style.label} >Surname: </label>
            <span>{contactos.surname}</span>
          </div>
          <div className={style.info}>
            <label className={style.label} >Phone: </label>
            <span>{contactos.phone}</span>
          </div>
          <div className="animate__animated animate__fadeInUp">
          {contactos.fav ? (
            <div className={style.info}>
              <img className={style.img_fav}  src={Fav} alt="Favorites" width={28}/>
              <label className={style.label} >Favorite: </label>
              <span>{contactos.fav && "Favorite Contact"}</span>
            </div>
          ) : (
            ""
          )}
          </div>
          <div>
            <button onClick={() => {
              removeContac(contactos.id)
              push("/contacts")
            }}>
              Delete
            </button>
            <button
              onClick={() =>
                contactos.fav ? removeFav(contactos.id) : addFav(contactos.id)
              }
            >
              {contactos.fav ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </>
      ) : (
        <h1>No Contacts</h1>
      )}
    </div>
    </div>
  );
}

export default connect(null, { removeContac, addFav, removeFav })(
  ContactDetail
);
