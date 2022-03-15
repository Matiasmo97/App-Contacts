import React from "react";
import { connect } from "react-redux";
import { removeContac, addFav, removeFav } from "../actions";
import style from "./style/ContactDetail.module.css";
import Fav from "../img/Fav.gif";
import { BsCardList } from "react-icons/bs";
import Swal from "sweetalert2";
import "animate.css";

//Hacemos un destructuring del 'contact' recibido del find aplicado en App.js
function ContactDetail({ contactos, removeContac, addFav, removeFav, push }) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  return (
    <div className="animate__animated animate__fadeInUp">
      <div className={style.conteiner}>
        {contactos ? (
          <>
            <h1 className={style.information}>
              <BsCardList className={style.icon__list} /> Information
            </h1>
            <div className={style.info}>
              <label className={style.label}>Name: </label>
              <span>{contactos.name}</span>
            </div>
            <div className={style.info}>
              <label className={style.label}>Surname: </label>
              <span>{contactos.surname}</span>
            </div>
            <div className={style.info}>
              <label className={style.label}>Phone: </label>
              <span>{contactos.phone}</span>
            </div>
            <div className="animate__animated animate__fadeInUp">
              {contactos.fav ? (
                <div className={style.info}>
                  <img
                    className={style.img_fav}
                    src={Fav}
                    alt="Favorites"
                    width={28}
                  />
                  <label className={style.label}>Favorite: </label>
                  <span>{contactos.fav && "Favorite Contact"}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                onClick={() => {
                  swalWithBootstrapButtons
                    .fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, delete it!",
                      cancelButtonText: "No, cancel!",
                      reverseButtons: true,
                    })
                    .then((result) => {
                      if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                          "Deleted!",
                          "Your contact has been deleted.",
                          "success"
                        );
                        removeContac(contactos.id);
                        push("/contacts");
                      } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                      ) {
                        swalWithBootstrapButtons.fire(
                          "Cancelled",
                          "Your contact is safe :D",
                          "error"
                        );
                      }
                    });
                }}
              >
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
