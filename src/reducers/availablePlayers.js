import { AVAILABLE_PLAYERS_LOADED } from '../actions/availablePlayers'

export default function (state = null, { type, availablePlayers }) {
  switch (type) {
    case AVAILABLE_PLAYERS_LOADED:
      return availablePlayers.map(availablePlayer => ({ ...availablePlayer }))
    default:
      return state
  }
}
