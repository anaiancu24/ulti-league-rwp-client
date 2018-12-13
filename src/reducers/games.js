import { GAMES_LOADED } from '../actions/games'

export default function (state = null, { type, games }) {
  switch (type) {
    case GAMES_LOADED:
      return games.map(game => ({ ...game }))
    default:
      return state
  }
}