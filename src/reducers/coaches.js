import { COACH_LOADED } from '../actions/coaches'

export default function (state = null, { type, coach }) {
  switch (type) {
    case COACH_LOADED:
      return { ...coach }
    default:
      return state
  }
}