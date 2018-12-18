import { OWNER_LOADED } from '../actions/owners'
import { PLAYER_SELECTED, PLAYER_UNSELECTED, SELECTION_CLEARED } from '../actions/selectPlayer'



export default function (state = null, { type, owner }) {
  switch (type) {
    case OWNER_LOADED:
      return { ...owner}
    case PLAYER_SELECTED:
      return { ...owner}
    case PLAYER_UNSELECTED:
      return { ...owner}
    case SELECTION_CLEARED:
      return { ...owner}
    default:
      return state
  }
}