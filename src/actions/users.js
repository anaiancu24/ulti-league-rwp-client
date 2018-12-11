import * as request from 'superagent'
import { baseUrl } from '../constants'

export const USER_LOGOUT = 'USER_LOGOUT'

export const logout = () => ({
  type: USER_LOGOUT
})