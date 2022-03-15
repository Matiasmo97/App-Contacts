import React from "react";
import { connect } from "react-redux";
import { removeContac, addFav, removeFav } from "../actions";
import style from "./style/ContactDetail.module.css";
import Fav from "../img/Fav.gif";
import Contact from "../img/Contact.png";
import Phone from "../img/phone-call.png"
import Email from "../img/mail.png"
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

  console.log(contactos);
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className={style.conteiner}>
        {contactos ? (
          <>
            <div className={style.contact_img}>
              <img src={Contact} alt="Contact" width={90} />
              
              <h2 className={style.contact__name}>
                {contactos.name} {contactos.surname}
              </h2>
            </div>
            <div className={style.contactarme}>
            <a href={`tel: ${contactos.phone}`} ><img src={Phone} alt="Phone" width={30} /></a>
            <a href={`mailto: ${contactos.email}`} ><img src={Email} alt="Email" width={30} /></a>
            </div>
            <div className={style.info}>
              <label className={style.label}>Phone: </label>
              <span>{contactos.phone}</span>
            </div>
            <div className={style.info}>
              <label className={style.label}>Email: </label>
              <span>{contactos.email}</span>
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
          <h1 className={style.noContact}>No Contacts</h1>
        )}
      </div>
    </div>
  );
}

export default connect(null, { removeContac, addFav, removeFav })(
  ContactDetail
);
