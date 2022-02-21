import { ADD_CONTACT, ADD_FAV, REMOVE_CONTACT, REMOVE_FAV } from './types'


export function addContact(name, surname, phone){
return {type: ADD_CONTACT, payload: {name, surname, phone, fav: false}}
}

export function removeContac(id){
return {type: REMOVE_CONTACT, payload: id}
}

export function addFav(id){
return {type: ADD_FAV, payload: id}
}

export function removeFav(id){
return {type: REMOVE_FAV, payload: id}
}

