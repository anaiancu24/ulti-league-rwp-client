import { combineReducers } from 'redux';
import login from './login'
import currentUser from './currentUsers'
import signup from './signup'
import players from './players'
import player from './player'
import coaches from './coaches'
import owners from './owners'
import teams from './teams'
import events from './events'
import games from './games'



export default combineReducers({
  players,
  player,
  coaches,
  owners,
  teams,
  currentUser,
  signup,
  login,
  events,
  games
})