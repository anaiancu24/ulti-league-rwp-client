import * as request from 'superagent'
import { baseUrl } from '../constants'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_DATA_LOADED = 'USER_DATA_LOADED'

export const logout = () => ({
	type: USER_LOGOUT
})

const userLoginSuccess = (login) => ({
	type: USER_LOGIN_SUCCESS,
	payload: login
})

const userLoginFailed = (error) => ({
	type: USER_LOGIN_FAILED,
	payload: error || 'error'
})

const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
})

const userSignupFailed = (error) => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'error'
})

const userDataLoaded = (user) => ({
	type: USER_DATA_LOADED,
	user
})

export const login = (data) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
		.send(data)
		.then(result => dispatch(userLoginSuccess(result.body)))
		.then(_ => dispatch(loadUserData()))
		.catch(err => {
			if (err.status === 400) {
				dispatch(userLoginFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})

export const signUp = (data) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send(data)
		.then(result => {
			dispatch(userSignupSuccess())
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})

export const loadUserData = () => (dispatch, getState) => {
	const state = getState()
	const jwt = state.currentUser.jwt
	request
		.get(`${baseUrl}/user`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(response => dispatch(userDataLoaded(response.body.user)))
		.catch(err => console.error(err))
}