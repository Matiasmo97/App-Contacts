import React from "react";
import { connect } from "react-redux";
import { removeContac, addFav, removeFav } from "../actions";
import style from "./style/ContactDetail.module.css"
import Fav from "../img/Fav.gif"

//Hacemos un destructuring del 'contact' recibido del find aplicado en App.js
function ContactDetail({ contactos, removeContac, addFav, removeFav, push }) {
  return (
    <div className={style.conteiner}>
      {contactos ? (
        <>
            <h1>Información</h1>
          <div className={style.info}>
            <label>Nombre: </label>
            <span>{contactos.name}</span>
          </div>
          <div className={style.info}>
            <label>Apellido: </label>
            <span>{contactos.surname}</span>
          </div>
          <div className={style.info}>
            <label>Telefono: </label>
            <span>{contactos.phone}</span>
          </div>
          {contactos.fav ? (
            <div className={style.info}>
              <img className={style.img_fav}  src={Fav} alt="Favorito" width={30}/>
              <label>Favorito: </label>
              <span>{contactos.fav && "Contacto Favorito"}</span>
            </div>
          ) : (
            ""
          )}
          <div>
            <button onClick={() => {
              removeContac(contactos.id)
              push("/contacts")
            }}>
              Eliminar
            </button>
            <button
              onClick={() =>
                contactos.fav ? removeFav(contactos.id) : addFav(contactos.id)
              }
            >
              {contactos.fav ? "Remover de Favoritos" : "Agregar a Favoritos"}
            </button>
          </div>
        </>
      ) : (
        <h1>No hay contactos</h1>
      )}
    </div>
  );
}

export default connect(null, { removeContac, addFav, removeFav })(
  ContactDetail
);
