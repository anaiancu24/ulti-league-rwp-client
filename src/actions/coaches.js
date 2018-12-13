import * as request from 'superagent'
import { baseUrl } from '../constants'

export const COACHES_LOADED = 'COACHES_LOADED'
export const COACH_LOADED = 'COACH_LOADED'

const coachesLoaded = (coaches) => ({
  type: COACHES_LOADED,
  coaches
})

const coachLoaded = (coach) => ({
  type: COACH_LOADED,
  coach
})

export const loadCoaches = () => (dispatch) => {
  request
    .get(`${baseUrl}/coaches`)
    .then(response => dispatch(coachesLoaded(response.body.coaches)))
    .catch(err => console.error(err))
}

export const loadCoach = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/coaches/${id}`)
    .then(response => dispatch(coachLoaded(response.body.coach)))
    .catch(err => console.error(err))
}