import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";
import style from "./style/AddContact.module.css";
import Friends from "../img/Friends.gif";

function validate(data) {
  const errors = {};
  if (!data.name) errors.name = "Debe ingresar un nombre";
  if (!data.surname) errors.surname = "Debe ingresar un apellido";
  if (!data.phone) errors.phone = "Debe ingresar un telefono";
  return errors;
}

function AddContact({ addContact }) {
  const [fromData, setfromData] = React.useState({
    name: "",
    surname: "",
    phone: "",
  });
  const [errors, setErrors] = React.useState({});

  //Creamos la funcion handleChange para actualizar los estados locales
  function handleChange(e) {
    // Usamos setfromData para hacerlo
    setfromData((prevData) => {
      const state = {
        //Traemos el estado previo
        ...prevData,
        // Y actualizamos el valor name(name, surname, phone)
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
    if (Object.values(errors).length > 0)
      alert("Completa todos los campos requeridos");
    else {
      addContact(fromData.name, fromData.surname, fromData.phone);
      // Vaciamos los inputs
      setfromData({ name: "", surname: "", phone: "" });
    }
  }

  return (
    <div className={style.content}>
      <h3>Add Information</h3>
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
        <input className={style.button} type="submit" value="Save" />
      </form>
      <div>
        <img src={Friends} alt="Friends" width={300} />
      </div>
    </div>
  );
}
// Creamos esta funcion para no repetir codigo
// Y a la vez la hacemos reutilizable para otro componente
function FormItem({ label, name, value, handleChange, error }) {
  return (
    <div>
      <label>{label}</label>
      <input className={style.input} name={name} value={value} onChange={handleChange} />
      <span className={style.error}>{error}</span>
    </div>
  );
}
export default connect(null, { addContact })(AddContact);
