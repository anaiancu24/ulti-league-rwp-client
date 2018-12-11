import { PLAYER_LOADED } from '../actions/players'


export default function (state = null, { type, player }) {
  switch (type) {
    case PLAYER_LOADED:
      return { ...player }
    default:
      return state
  }
}