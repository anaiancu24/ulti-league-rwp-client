import { combineReducers } from 'redux';
import login from './login'
import currentUser from './currentUsers'
import signup from './signup'
import players from './players'
import coaches from './coaches'
import communityOwners from './communityOwners'
import teams from './teams'

export default combineReducers({
  players,
  coaches,
  communityOwners,
  teams,
  currentUser,
  signup,
  login,
})