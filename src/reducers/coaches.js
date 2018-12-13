import { COACHES_LOADED } from '../actions/coaches'

export default function (state = null, { type, coaches }) {
  switch (type) {
    case COACHES_LOADED:
      return coaches.map(coach => ({ ...coach }))
    default:
      return state
  }
}
