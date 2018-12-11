import { COACHES_LOADED, COACH_LOADED } from '../actions/coaches'

export default function (state = null, {type, payload}) {
  switch (type) {
    case COACHES_LOADED:
      return payload.reduce((coaches, coach) => {
      coaches[coach.id] = coach
      return coaches
      }, {...state})
    case COACH_LOADED:
      return {...state, 
        [payload.id]: payload
      }
    default:
      return state
  }
}
