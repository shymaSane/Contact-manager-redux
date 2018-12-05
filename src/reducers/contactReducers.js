import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT} from '../actions/type'

//each reducers has its intial state
const initialState = {
    contacts: [],
    contact: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case EDIT_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact =>  contact.id !== action.payload)
            }
        default:
            return state
    }
}