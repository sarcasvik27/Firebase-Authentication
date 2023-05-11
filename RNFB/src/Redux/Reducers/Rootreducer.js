import Add from './AddtoCartReducer';
import {combineReducers} from 'redux'
export const RootReducer = combineReducers({
  Addtocart:Add
  });