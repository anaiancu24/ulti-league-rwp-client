import { combineReducers } from 'redux';
import login from './login'
import currentUser from './currentUser'
import signup from './signup'

export default combineReducers({
  signup,
  currentUser,
  login
})