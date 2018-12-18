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
import event from './event'
import games from './games'
import game from './game'
import userData from './userData'
import availablePlayers from './availablePlayers'
import owner from './owner'

export default combineReducers({
  players,
  player,
  coaches,
  coach,
  games,
  game,
  owners,
  owner,
  teams,
  team,
  events,
  event,
  currentUser,
  userData,
  signup,
  login,
  availablePlayers
  
})