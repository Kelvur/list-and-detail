// Core
import { combineReducers } from 'redux';
// Reducers
import search from './search';
import pokemon from './pokemon';


export default combineReducers({
  search,
  pokemon,
});
