import { PLAYERS_LOADED } from '../actions/players'

export default function (state = null, { type, players }) {
  switch (type) {
    case PLAYERS_LOADED:
      return players.map(player => ({ ...player }))
    default:
      return state
  }
}

