import {
  USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED
} from '../actions/users'
import { USER_LOGOUT } from '../actions/users'

export default function (state = {}, { type, payload }) {
  switch (type) {
    case USER_SIGNUP_SUCCESS:
      return {
        success: true
      }

    case USER_SIGNUP_FAILED:
      return {
        error: payload
      }

    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}
