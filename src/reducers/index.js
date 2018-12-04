//the root reducers
// meeting place for all of our reducers
import {combineReducers} from 'redux';
import contactReducers from './contactReducers';

export default combineReducers({
    //the name is important since it ll be, this.props.contact
    contact: contactReducers
})