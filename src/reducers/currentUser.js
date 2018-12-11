import {USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users'

export default function (state = null, { type, payload }) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload
    case USER_LOGOUT:
      return null
		default:
      return state
	}
}

