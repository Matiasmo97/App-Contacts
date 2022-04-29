import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style/ContactsFav.module.css";
import Friends3 from "../img/Friends3.svg";
import iconFav from "../img/star.png";
import 'animate.css';

function ContactsFav() {
  const contactos = useSelector((state) => state);
  let contactsFav = contactos.filter((c) => c.fav === true);

  return (
    <div className="animate__animated animate__fadeInUp">
    <div className={style.content}>
      <img src={Friends3} alt="Friends3" width={280} height={220} />
      </div>
      <div className={style.containerFavs}>
      <ul>
        {/* Recorremos el array(contactsFav) con todos los contactos agregados a favoritos */}
        {contactsFav.length > 0 ? (
          contactsFav.map((contact) => (
            <div className={style.contentFavs} key={contact.id}>
              <NavLink className={style.links} to={`/contact/${contact.id}`}>
                <li
                  className={style.li}
                ><img className={style.imgFav} src={iconFav} alt="imgContact" width={35} />{`${contact.name} ${contact.surname}`}</li>
              </NavLink>
            </div>
          ))
        ) : (
          <div>
            <h2 className={style.h2}>You have no favorite contacts added</h2>
          </div>
        )}
      </ul>
      </div>
    </div>
  );
}

export default ContactsFav;
