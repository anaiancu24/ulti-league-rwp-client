import { PLAYERS_LOADED } from '../actions/players'

export default function (state = null, {type, players}) {
  switch (type) {
    case PLAYERS_LOADED:
      return players.reduce((players, player) => {
      players[player.id] = player
      return players
      }, {...state})
    default:
      return state
  }
}
