import { USER_DATA_LOADED } from '../actions/users'

export default function (state = null, { type, user }) {
  switch (type) {
    case USER_DATA_LOADED:
      return { ...user }
    default:
      return state
  }
}