import { combineReducers } from 'redux';
import login from './login'
import currentUser from './currentUsers'
import signup from './signup'
import players from './players'
import player from './player'
import coaches from './coaches'
import coach from './coach'
import owners from './owners'
import teams from './teams'
import team from './team'
import events from './events'
import games from './games'



export default combineReducers({
  players,
  player,
  coaches,
  coach,
  owners,
  teams,
  team,
  currentUser,
  signup,
  login,
  events,
  games
})