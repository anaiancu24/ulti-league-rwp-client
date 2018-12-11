import { COACHES_LOADED, COACH_LOADED } from '../actions/coaches'

export default function (state = null, {type, coaches}) {
  switch (type) {
    case COACHES_LOADED:
      return coaches.reduce((coaches, coach) => {
      coaches[coach.id] = coach
      return coaches
      }, {...state})
    case COACH_LOADED:
      return state
    default:
      return state
  }
}
