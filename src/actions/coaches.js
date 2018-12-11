import * as request from 'superagent'
import { baseUrl } from '../constants'

export const COACH_LOADED = 'PLAYER_LOADED'

const coachLoaded = (coach) => ({
  type: COACH_LOADED,
  coach
})

export const loadCoach = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/coaches/${id}`)
    .then(response => dispatch(coachLoaded(response.body.coach)))
    .catch(err => console.error(err))
}