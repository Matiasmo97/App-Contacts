import {
  ADD_CONTACT,
  ADD_FAV,
  REMOVE_CONTACT,
  REMOVE_FAV,
} from "../actions/types";

const initialState = [];
// let contactFav = [];
let prevId = 0;

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CONTACT: {
      //Retornamos un nuevo array con el estado previo
      // Nos quedamos con el payload(name, surname, phone, fav)
      // le agregamos 'id' inicialmente en 0
      return [...state, { ...payload, id: ++prevId }];
    }
    case REMOVE_CONTACT: {
      //Le aplicamos filter al array
      // Y devovemos todos los contactos menos el que coincidio con el id del payload
      return state.filter((contact) => contact.id !== payload);
    }
    case ADD_FAV: {
      //Creamos un nuevo array y lo recorremos todo para encontar el contacto
      return state.map((contact) => {
        // Si coincide el id entra al if
        if (contact.id === payload) {
          //Retornamos el mismo array pero con el contacto
          //que coincide el id con el fav en true
          // contactFav.push(contact)
          return { ...contact, fav: true };
        }
        return { ...contact };
      });
    }
    case REMOVE_FAV: {
      //Creamos un nuevo array y lo recorremos todo para encontar el contacto
      return state.map((contact) => {
        // Si coincide el id entra al if
        if (contact.id === payload) {
          //Retornamos el mismo array pero con el contacto
          //que coincide el id con el fav en false
          return { ...contact, fav: false };
        }
        return { ...contact };
      });
    }
    default:
      return state;
  }
}

export default reducer;
