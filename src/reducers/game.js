import { GAME_LOADED } from '../actions/games'

export default function (state = null, { type, game }) {
  switch (type) {
    case GAME_LOADED:
      return { ...game }
    default:
      return state
  }
}