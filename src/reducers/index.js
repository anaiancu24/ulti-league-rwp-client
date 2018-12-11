import { combineReducers } from 'redux';
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import player from './player'
import coach from './coach'

export default combineReducers({
  player,
  coach,
  currentUser,
  signup,
  login,
})