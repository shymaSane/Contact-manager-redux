// we need this: 1- The main reason for separating the action creators from the reducer function is that the reducer function must be a pure function. If you wanted to do something in an action creator, like an asynchronous API call for instance, then you could not put this in the reducer
//2- thunk allows you dispatch async actions along with regular sync actions
//3- action is an object describes the change

import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT} from './type';
import axios from 'axios';

export const getContacts = ()=> async dispatch =>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    dispatch(
        {
            type: GET_CONTACTS,
            payload: res.data
        }
    ) 
}

export const addContact = (contact) => async dispatch =>{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, {contact})
    dispatch({
        type: ADD_CONTACT,
        payload: res.data.contact
    })
}

export const deleteContact = (id) => async dispatch =>{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
}

