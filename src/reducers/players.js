import { PLAYERS_LOADED, PLAYER_LOADED } from '../actions/players'

export default function (state = null, {type, payload}) {
  switch (type) {
    case PLAYERS_LOADED:
      return payload.reduce((players, player) => {
      players[player.id] = player
      return players
      }, {...state})
    case PLAYERS_LOADED:
            return {...state, 
              [payload.id]: payload
            }
    default:
      return state
  }
}

