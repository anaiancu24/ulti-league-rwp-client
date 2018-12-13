import { OWNER_LOADED } from '../actions/owners'

export default function (state = null, { type, owner }) {
  switch (type) {
    case OWNER_LOADED:
      return { ...owner }
    default:
      return state
  }
}