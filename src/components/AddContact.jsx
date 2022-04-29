import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";
import style from "./style/AddContact.module.css";
import Perfil from "../img/Perfil.png";
import Swal from "sweetalert2";

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const phoneRegex = /^([0-9])*$/;
function validate(data) {
  const errors = {};
  if (!data.name) errors.name = "You must enter a name";
  if (!data.surname) errors.surname = "You must enter a last name";
  if (!data.phone) {
    errors.phone = "You must enter a phone";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "You must enter only numbers";
  }
  if (!data.email) {
    errors.email = "You must enter a email";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Must be a correct email format";
  }
  return errors;
}

function AddContact({ addContact }) {
  const [fromData, setfromData] = React.useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = React.useState({});

  //Creamos la funcion handleChange para actualizar los estados locales
  function handleChange(e) {
    // Usamos setfromData para hacerlo
    setfromData((prevData) => {
      const state = {
        //Traemos el estado previo
        ...prevData,
        // Y actualizamos el valor name(name, surname, phone, email)
        [e.target.name]: e.target.value,
      };
      const validations = validate(state);
      setErrors(validations);
      return state;
    });
  }

  // Creamos la funcion handleSumit para submitear la informacion al array de contactos
  function handleSumit(e) {
    // Usamos preventDefault para lograr que la pagina no se regargue
    // cuando hagamos el submit. Si no lo usaramos se perderia toda
    // la informacion
    e.preventDefault();
    // Usamos la funcion addContact para extraer el estado de la informacion de fromData
    // y se la pasamos al array de contactos
    if (Object.values(errors).length > 0) {
      //
      Swal.fire({
        icon: "error",
        title: "Complete all required fields",
        text: "Something went wrong!",
      });
    } else {
      addContact(
        fromData.name,
        fromData.surname,
        fromData.phone,
        fromData.email
      );
      Swal.fire({
        icon: "success",
        title: "Your contact has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      // Vaciamos los inputs
      setfromData({ name: "", surname: "", phone: "", email: "" });
    }
  }

  return (
    <div className="animate__animated animate__fadeInUp">
      <div className={style.content}>
        <img src={Perfil} alt="Perfil" width={55} style={{marginBottom: "1rem"}} />
        <form onSubmit={handleSumit}>
          <FormItem
            label="Name"
            name="name"
            value={fromData.name}
            handleChange={handleChange}
            error={errors.name}
          />
          <FormItem
            label="Surname"
            name="surname"
            value={fromData.surname}
            handleChange={handleChange}
            error={errors.surname}
          />
          <FormItem
            label="Phone"
            name="phone"
            value={fromData.phone}
            handleChange={handleChange}
            error={errors.phone}
          />
          <FormItem
            label="Email"
            name="email"
            value={fromData.email}
            handleChange={handleChange}
            error={errors.email}
          />
          <input className={style.button} type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}
// Creamos esta funcion para no repetir codigo
// Y a la vez la hacemos reutilizable para otro componente
function FormItem({ label, name, value, handleChange, error }) {
  return (
    <div className={style.container}>
      <label className={style.labels}>{label}</label>
      <input
        className={style.input}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className={style.error}>{error}</span>
    </div>
  );
}
export default connect(null, { addContact })(AddContact);
