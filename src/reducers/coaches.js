import { COACHES_FETCHED_SUCCESS } from '../actions/coaches'

export default function (state = null, {type, coaches}) {
  switch (type) {
    case COACHES_FETCHED_SUCCESS:
      return coaches.reduce((coaches, coach) => {
      coaches[coach.id] = coach
      return coaches
      }, {...state})
    default:
      return state
  }
}
